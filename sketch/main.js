// 종횡비를 고정하고 싶을 경우: 아래 두 변수를 0이 아닌 원하는 종, 횡 비율값으로 설정.
// 종횡비를 고정하고 싶지 않을 경우: 아래 두 변수 중 어느 하나라도 0으로 설정.
const aspectW = 4;
const aspectH = 3;
// html에서 클래스명이 container-canvas인 첫 엘리먼트: 컨테이너 가져오기.
const container = document.body.querySelector('.container-canvas');
// 필요에 따라 이하에 변수 생성.
let capture;
let colorOpacity = 40;
let noseOpacity = 0;
let fOpacity = 0;
let noseColorH = 255;
let noseColorS = 255;
let noseColorB = 255;
let opacity = false;
let filter = false;
let filter2 = false;
let sparkleCounter = 0;

function setup() {
  // 컨테이너의 현재 위치, 크기 등의 정보 가져와서 객체구조분해할당을 통해 너비, 높이 정보를 변수로 추출.
  const { width: containerW, height: containerH } =
    container.getBoundingClientRect();
  // 종횡비가 설정되지 않은 경우:
  // 컨테이너의 크기와 일치하도록 캔버스를 생성하고, 컨테이너의 자녀로 설정.
  if (aspectW === 0 || aspectH === 0) {
    createCanvas(containerW, containerH).parent(container);
  }
  // 컨테이너의 가로 비율이 설정한 종횡비의 가로 비율보다 클 경우:
  // 컨테이너의 세로길이에 맞춰 종횡비대로 캔버스를 생성하고, 컨테이너의 자녀로 설정.
  else if (containerW / containerH > aspectW / aspectH) {
    createCanvas((containerH * aspectW) / aspectH, containerH).parent(
      container
    );
  }
  // 컨테이너의 가로 비율이 설정한 종횡비의 가로 비율보다 작거나 같을 경우:
  // 컨테이너의 가로길이에 맞춰 종횡비대로 캔버스를 생성하고, 컨테이너의 자녀로 설정.
  else {
    createCanvas(containerW, (containerW * aspectH) / aspectW).parent(
      container
    );
  }
  init();
  // createCanvas를 제외한 나머지 구문을 여기 혹은 init()에 작성.
  capture = createCapture(VIDEO);
  capture.size(1000, 1000);
  capture.hide();
  colorMode(HSB);
}

// windowResized()에서 setup()에 준하는 구문을 실행해야할 경우를 대비해 init이라는 명칭의 함수를 만들어 둠.
function init() {}

function draw() {
  // background(220);
  image(capture, 0, 0, width, height);
  // // circle(mouseX, mouseY, 50);
  // let lineHue = mouseX - mouseY;
  // strokeWeight(50);
  // stroke(lineHue, 90, 90);
  // line(pmouseX, pmouseY, mouseX, mouseY);

  //얼굴 가이드라인
  noStroke();
  fill(0, 0, 100, colorOpacity);
  ellipse(width * 0.5, height * 0.42, width * 0.35, height * 0.5);

  textAlign(CENTER);
  textSize(36);
  fill(0, 0, 100, colorOpacity * 6);
  text('얼굴을 원의 위치에 맞춰주세요.', width * 0.5, height * 0.75);
  //얼굴 위치

  //크리스마스 필터 시작
  fill(noseColorH, noseColorS, noseColorB, noseOpacity);
  circle(width * 0.5, height * 0.5, width * 0.072);
  //루돌프 코

  fill(100, 0, 100, noseOpacity);
  circle(width * 0.51, height * 0.48, width * 0.018);
  //루돌프 코 하이라이트

  textAlign(CENTER);
  textSize(56);
  fill(0, 80, 80, noseOpacity);
  stroke(100, 0, 100, noseOpacity);
  strokeWeight(10);
  text('Merry Christmas!', width * 0.5, height * 0.85);
  //문구

  noStroke();
  fill(0, 80, 90, noseOpacity);
  triangle(
    width * 0.35,
    height * 0.3,
    width * 0.65,
    height * 0.3,
    width * 0.5,
    height * 0.06
  );

  rectMode(CENTER);
  fill(100, 0, 100, noseOpacity);
  rect(width * 0.5, height * 0.3, width * 0.32, height * 0.08, 20);

  fill(100, 0, 100, noseOpacity);
  circle(width * 0.5, height * 0.044, width * 0.035);
  //산타 모자
  //크리스마스 필터 끝

  //종강 필터 시작

  fill(0, 0, 100, fOpacity);
  rect(width * 0.5, height * 0.85, width * 0.6, height * 0.3, 5);
  fill(0, 0, 100, fOpacity);
  rect(width * 0.5, height * 0.05, width * 0.6, height * 0.1, 5);
  fill(0, 0, 100, fOpacity);
  rect(width * 0.225, height * 0.4, width * 0.05, height * 0.65, 5);
  fill(0, 0, 100, fOpacity);
  rect(width * 0.775, height * 0.4, width * 0.05, height * 0.65, 5);
  //인스타 피드 프레임

  // fill(330, 40, 100, fOpacity);
  // circle(width * 0.28, height * 0.05, width * 0.035);
  fill(330, 40, 100, fOpacity);
  circle(width * 0.28, height * 0.75, width * 0.035);
  //프로필 사진

  textAlign(CENTER);
  textSize(20);
  fill(0, 0, 0, fOpacity);
  text('Jongang_Gabojago', width * 0.5, height * 0.055);
  textAlign(CENTER);
  textSize(14);
  fill(0, 0, 0, fOpacity);
  text('Jongang_Gabojago', width * 0.38, height * 0.76);
  //프로필명

  fill(120, 80, 60, fOpacity);
  rect(width * 0.35, height * 0.56, width * 0.1, height * 0.25, 3);
  fill(120, 80, 60, fOpacity);
  rect(width * 0.35, height * 0.26, width * 0.05, height * 0.015, 3);
  fill(120, 80, 60, fOpacity);
  rect(width * 0.35, height * 0.36, width * 0.04, height * 0.2, 3);
  fill(60, 80, 100, fOpacity);
  rect(width * 0.35, height * 0.56, width * 0.1, height * 0.08, 3);
  fill(0, 80, 80, fOpacity * 0.4);
  circle(width * 0.43, height * 0.5, width * 0.05);
  fill(0, 80, 80, fOpacity * 0.4);
  circle(width * 0.58, height * 0.5, width * 0.05);
  //임티

  textAlign(CENTER);
  textSize(24);
  fill(200, 80, 90, fOpacity);
  strokeWeight(10);
  text('#우와종강이다#방학시작', width * 0.5, height * 0.85);
  text('#다들_한학기_고생많으셨습니다', width * 0.5, height * 0.9);
  //문구
  //종강 필터 끝

  if (opacity) {
    colorOpacity = 0; // s키가 눌린 상태일 때 색상
  } else {
    colorOpacity = 0.3; // s키가 눌리지 않은 상태일 때 색상
  }

  if (filter) {
    noseOpacity = 1; // f키가 눌린 상태일 때 색상
  } else {
    noseOpacity = 0; // f키가 눌리지 않은 상태일 때 색상
  }

  if (filter2) {
    fOpacity = 1; // n키가 눌린 상태일 때 색상
  } else {
    fOpacity = 0; // n키가 눌리지 않은 상태일 때 색상
  }
}

function keyPressed() {
  if (key === 'S' || key === 's') {
    opacity = !opacity;
  }
  if (key === 'F' || key === 'f') {
    filter = !filter;
  }
  if (key === 'N' || key === 'n') {
    filter2 = !filter2;
    filter = !filter;
  }
}

function mouseClicked() {
  if (noseColorH === 0) {
    noseColorH = random(0, 360);
  } else {
    noseColorH = random(0, 360);
  }
  if (noseColorS === 0) {
    noseColorS = random(90, 100);
  } else {
    noseColorS = random(90, 100);
  }
  if (noseColorB === 0) {
    noseColorB = random(90, 100);
  } else {
    noseColorB = random(90, 100);
  }
}

function windowResized() {
  // 컨테이너의 현재 위치, 크기 등의 정보 가져와서 객체구조분해할당을 통해 너비, 높이 정보를 변수로 추출.
  const { width: containerW, height: containerH } =
    container.getBoundingClientRect();
  // 종횡비가 설정되지 않은 경우:
  // 컨테이너의 크기와 일치하도록 캔버스 크기를 조정.
  if (aspectW === 0 || aspectH === 0) {
    resizeCanvas(containerW, containerH);
  }
  // 컨테이너의 가로 비율이 설정한 종횡비의 가로 비율보다 클 경우:
  // 컨테이너의 세로길이에 맞춰 종횡비대로 캔버스 크기를 조정.
  else if (containerW / containerH > aspectW / aspectH) {
    resizeCanvas((containerH * aspectW) / aspectH, containerH);
  }
  // 컨테이너의 가로 비율이 설정한 종횡비의 가로 비율보다 작거나 같을 경우:
  // 컨테이너의 가로길이에 맞춰 종횡비대로 캔버스 크기를 조정.
  else {
    resizeCanvas(containerW, (containerW * aspectH) / aspectW);
  }
  // 위 과정을 통해 캔버스 크기가 조정된 경우, 다시 처음부터 그려야할 수도 있다.
  // 이런 경우 setup()의 일부 구문을 init()에 작성해서 여기서 실행하는게 편리하다.
  // init();
}
