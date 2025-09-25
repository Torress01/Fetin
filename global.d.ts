// p5.js functions
declare function createCanvas(w: number, h: number): any;
declare function resizeCanvas(w: number, h: number): void;
declare function push(): void;
declare function pop(): void;
declare function stroke(color: any): void;
declare function strokeWeight(weight: number): void;
declare function strokeJoin(style: any): void;
declare function fill(color: any): void;
declare function noFill(): void;
declare function noStroke(): void;
declare function beginShape(): void;
declare function vertex(x: number, y: number): void;
declare function endShape(mode?: any): void;
declare function ellipse(x: number, y: number, w: number, h?: number): void;
declare function background(color: any): void;
declare function translate(x: number, y: number): void;
declare function scale(factor: number): void;
declare function cursor(type: any): void;
declare function textFont(font: string): void;
declare function text(str: string, x: number, y: number): void;
declare function textSize(size: number): void;
declare function textAlign(horizontal: any, vertical?: any): void;
declare function dist(x1: number, y1: number, x2: number, y2: number): number;
declare function redraw(): void;

// p5 constants
declare const ROUND: any;
declare const CLOSE: any;
declare const ARROW: any;
declare const windowWidth: number;
declare const windowHeight: number;

// canvas
declare let canvas: any;
