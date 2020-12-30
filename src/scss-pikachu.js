const string = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::after {
  box-sizing: border-box;
}
*::before {
  box-sizing: border-box;
}
body {
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ffe600;
  font-size: 100px;
}
.pikachu {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5em;
  height: 3em;
  border: 1px solid transparent;

  .nose {
    position: absolute;
    width: 0;
    height: 0;
    /* centering trick */
    margin: 0.5em calc(50% - 0.11em);
    margin-top: 0.38em;
    border-top: 0.09em solid #000;
    border-left: 0.11em solid transparent;
    border-right: 0.11em solid transparent;

    &::before {
      content: "";
      position: absolute;
      bottom: 0.09em;
      left: -0.11em;
      background-color: #000000;
      border-top-left-radius: 0.11em 0.05em;
      border-top-right-radius: 0.11em 0.05em;
      display: block;
      border: 1px solid #000;
      width: 0.22em;
      height: 0.05em;
    }
  }
  .eye {
    position: absolute;
    width: 0.64em;
    height: 0.64em;
    border-radius: 50%;
    margin-left: 1em;
    background: #000;

    &::before {
      content: "";
      position: absolute;
      top: 0.05em;
      right: 0.12em;
      display: block;
      width: 0.25em;
      height: 0.25em;
      border-radius: 50%;
      background-color: #fff;
      animation: eyeMove 3s infinite;
    }
  }
  .right {
    right: 1em;
  }
  .mouthBox {
    position: absolute;
    width: 2.28em;
    height: 1.8em;
    margin-top: 0.66em;
    margin-left: calc(50% - 1.14em);
    overflow: hidden;

    .lipLeft {
      content: "";
      width: 0.8em;
      height: 0.25em;
      border: 0.03em solid #000;
      background-color: #ffe600;
      border-right: none;
      border-top: none;
      display: block;
      position: absolute;
      top: -0.04em;
      left: 0.34em;
      transform: rotateZ(-22deg);
      border-bottom-left-radius: 0.6em 0.3em;
      box-shadow: 0 -0.1em 0 #ffe600;
      z-index: 1;

      &::after {
        content: "";
        width: 0.04em;
        height: 0.21em;
        display: block;
        position: absolute;
        right: -0.01em;
        top: 0.01em;
        background-color: #ffe600;
      }
      &::before {
        content: "";
        width: 0.3em;
        height: 0.04em;
        display: block;
        position: absolute;
        left: 0.01em;
        top: 0;
        background-color: #ffe600;
      }
    }
    .lipRight {
      content: "";
      width: 0.8em;
      height: 0.25em;
      border: 0.03em solid #000;
      background-color: #ffe600;
      border-left: none;
      border-top: none;
      display: block;
      position: absolute;
      right: 0.33em;
      top: -0.04em;
      transform: rotateZ(22deg);
      border-bottom-right-radius: 0.6em 0.3em;
      box-shadow: 0 -0.1em 0 #ffe600;
      z-index: 1;

      &::after {
        content: "";
        width: 0.04em;
        height: 0.21em;
        display: block;
        position: absolute;
        left: -0.01em;
        top: 0;
        background-color: #ffe600;
      }
      &::before {
        content: "";
        width: 0.3em;
        height: 0.04em;
        display: block;
        position: absolute;
        right: 0.01em;
        top: 0;
        background-color: #ffe600;
      }
    }
    .mouth {
      position: absolute;
      border: 0.03em solid #000;
      width: 2.28em;
      height: 8em;
      margin-top: -6.42em;
      border-bottom-left-radius: 1.18em 8em;
      border-bottom-right-radius: 1.18em 8em;
      background-color: #9b000a;
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        width: 1.3em;
        height: 1em;
        display: block;
        background-color: #ff485f;
        border-radius: 50%;
        box-shadow: 0 0.7em 0 #ff485f;
        bottom: 0.2em;
        left: -0.03em;
        margin-left: 0.49em;
      }
    }
  }
  .cheek {
    position: absolute;
    width: 0.82em;
    height: 0.82em;
    border: 0.03em solid #000;
    background-color: #ff0000;
    border-radius: 50%;
    margin-top: 1.11em;
    margin-left: 0.4em;
  }
  .cheek.right {
    right: 0.4em;
  }
}

@keyframes eyeMove {
  0%,
  100% {
    top: 0.05em;
    right: 0.12em;
  }
  30%,40%,50% {
    top: 0.30em;
  }
  75% {
    top: 0.05em;
    right: 0.3em;
  }
}
`;
export default string;