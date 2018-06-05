export const template = ({
  counterValue, version, nodeVersion, proccessId,
}) => `
    <style>
      .container {
        text-align: center;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        position: absolute;
        font: 18pt sans-serif;
      }

      .counter {
        font-weigth: bold;
        font-size: 3em;
        font-family: monospace;
      }

      .version {
        padding-top: 50px;
        font-family: monospace;
        font-size: 0.5em;
        text-align: left;
      }

      .number-mark {
        font-size: 0.5em;
      }
    </style>
    <div class="container">
      You are the visitor
      <div class="counter">
        <span class="counter-number">
          <span class="number-mark">#</span>${counterValue}
        </span>
      </div>
      for the last minute.
      <div class="version">
        package version: ${version} <br/>
        node version: ${nodeVersion} <br />
        process id: ${proccessId}
      </div>
    </div>
  `;

export default template;
