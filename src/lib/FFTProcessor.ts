export interface Complex {
  real: number;
  imag: number;
}

export interface FFTResult {
  magnitude: number[];
  phase: number[];
}

export class FFTProcessor {
  static fft1d(signal: Complex[]): Complex[] {
    const n = signal.length;

    if (n === 1) {
      return [{ real: signal[0].real, imag: signal[0].imag }];
    }

    if (n & (n - 1)) {
      return [];
    }

    const result = new Array(n);
    for (let i = 0; i < n; i++) {
      result[i] = { real: signal[i].real, imag: signal[i].imag };
    }

    for (let i = 0, j = 0; i < n; i++) {
      if (i < j) {
        const temp = { real: result[i].real, imag: result[i].imag };
        result[i] = { real: result[j].real, imag: result[j].imag };
        result[j] = { real: temp.real, imag: temp.imag };
      }

      let k = n >> 1;
      while (k > 0 && j >= k) {
        j -= k;
        k >>= 1;
      }
      j += k;
    }

    for (let s = 1; s < Math.log2(n) + 1; s++) {
      const m = Math.pow(2, s);
      const wm = {
        real: Math.cos((-2 * Math.PI) / m),
        imag: Math.sin((-2 * Math.PI) / m),
      };

      for (let k = 0; k < n; k += m) {
        let w = { real: 1, imag: 0 };

        for (let j = 0; j < m / 2; j++) {
          const t = {
            real:
              w.real * result[k + j + m / 2].real -
              w.imag * result[k + j + m / 2].imag,
            imag:
              w.real * result[k + j + m / 2].imag +
              w.imag * result[k + j + m / 2].real,
          };

          const u = { real: result[k + j].real, imag: result[k + j].imag };

          result[k + j] = {
            real: u.real + t.real,
            imag: u.imag + t.imag,
          };

          result[k + j + m / 2] = {
            real: u.real - t.real,
            imag: u.imag - t.imag,
          };

          const nextW = {
            real: w.real * wm.real - w.imag * wm.imag,
            imag: w.real * wm.imag + w.imag * wm.real,
          };
          w = nextW;
        }
      }
    }

    return result;
  }

  static ifft1d(spectrum: Complex[]): Complex[] {
    const n = spectrum.length;

    const conjugatedSpectrum = spectrum.map((x) => ({
      real: x.real,
      imag: -x.imag,
    }));

    const result = FFTProcessor.fft1d(conjugatedSpectrum);

    return result.map((x) => ({
      real: x.real / n,
      imag: -x.imag / n,
    }));
  }

  static isPowerOf2(n: number): boolean {
    return n > 0 && (n & (n - 1)) === 0;
  }

  static padToPowerOf2(array: Complex[]): Complex[] {
    if (FFTProcessor.isPowerOf2(array.length)) {
      return array;
    }

    const nextPow2 = Math.pow(2, Math.ceil(Math.log2(array.length)));
    const padded = [...array];

    for (let i = array.length; i < nextPow2; i++) {
      padded.push({ real: 0, imag: 0 });
    }

    return padded;
  }

  static compute2DFFT(
    data: number[],
    width: number,
    height: number
  ): FFTResult {
    const realData: Complex[] = [];
    for (let i = 0; i < data.length; i++) {
      realData.push({ real: data[i], imag: 0 });
    }

    const rowFFT: Complex[][] = [];
    for (let y = 0; y < height; y++) {
      let row: Complex[] = [];
      for (let x = 0; x < width; x++) {
        row.push(realData[y * width + x]);
      }

      row = FFTProcessor.padToPowerOf2(row);

      rowFFT.push(FFTProcessor.fft1d(row));
    }

    const result: Complex[][] = Array(height)
      .fill(null)
      .map(() => Array(width).fill(null));

    for (let x = 0; x < width; x++) {
      let col: Complex[] = [];
      for (let y = 0; y < height; y++) {
        col.push(rowFFT[y][x]);
      }

      col = FFTProcessor.padToPowerOf2(col);

      const colFFT = FFTProcessor.fft1d(col);

      for (let y = 0; y < height; y++) {
        result[y][x] = colFFT[y];
      }
    }

    const magnitude: number[] = [];
    const phase: number[] = [];

    const totalPixels = width * height;

    for (let i = 0; i < totalPixels; i++) {
      const y = Math.floor(i / width);
      const x = i % width;

      if (result[y] && result[y][x]) {
        const real = result[y][x].real;
        const imag = result[y][x].imag;

        const mag = Math.sqrt(real * real + imag * imag);
        const ph = Math.atan2(imag, real);

        magnitude.push(mag);
        phase.push(ph);
      } else {
        magnitude.push(0);
        phase.push(0);
      }
    }

    return { magnitude, phase };
  }

  static compute2DIFFT(
    complexData: Complex[],
    width: number,
    height: number
  ): number[] {
    const matrix: Complex[][] = [];
    for (let y = 0; y < height; y++) {
      matrix[y] = [];
      for (let x = 0; x < width; x++) {
        matrix[y][x] = complexData[y * width + x];
      }
    }

    const rowIFFT: Complex[][] = [];
    for (let y = 0; y < height; y++) {
      rowIFFT.push(FFTProcessor.ifft1d(matrix[y]));
    }

    const colIFFT: number[][] = Array(height)
      .fill(null)
      .map(() => Array(width).fill(0));

    for (let x = 0; x < width; x++) {
      const col: Complex[] = [];
      for (let y = 0; y < height; y++) {
        col.push(rowIFFT[y][x]);
      }

      const colResult = FFTProcessor.ifft1d(col);

      for (let y = 0; y < height; y++) {
        colIFFT[y][x] = colResult[y].real;
      }
    }

    const flatResult: number[] = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        flatResult.push(colIFFT[y][x]);
      }
    }

    return flatResult;
  }
}
