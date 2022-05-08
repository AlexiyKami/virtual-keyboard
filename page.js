const page = `<div class="wrapper">
<p class="title">Virtual Keyboard</p>
<textarea class="textarea" cols="30" rows="10" autofocus></textarea>
<div class="keyboard">
  <div class="kb-row">
    <div class="kb-key symbol Backquote">\`</div>
    <div class="kb-key digit Digit1">1</div>
    <div class="kb-key digit Digit2">2</div>
    <div class="kb-key digit Digit3">3</div>
    <div class="kb-key digit Digit4">4</div>
    <div class="kb-key digit Digit5">5</div>
    <div class="kb-key digit Digit6">6</div>
    <div class="kb-key digit Digit7">7</div>
    <div class="kb-key digit Digit8">8</div>
    <div class="kb-key digit Digit9">9</div>
    <div class="kb-key digit Digit0">0</div>
    <div class="kb-key symbol Minus">-</div>
    <div class="kb-key symbol Equal">=</div>
    <div class="kb-key Backspace fn">Backspace</div>
  </div>
  <div class="kb-row">
    <div class="kb-key Tab fn">Tab</div>
    <div class="kb-key key KeyQ">q</div>
    <div class="kb-key key KeyW">w</div>
    <div class="kb-key key KeyE">e</div>
    <div class="kb-key key KeyR">r</div>
    <div class="kb-key key KeyT">t</div>
    <div class="kb-key key KeyY">y</div>
    <div class="kb-key key KeyU">u</div>
    <div class="kb-key key KeyI">i</div>
    <div class="kb-key key KeyO">o</div>
    <div class="kb-key key KeyP">p</div>
    <div class="kb-key symbol BracketLeft">[</div>
    <div class="kb-key symbol BracketRight">]</div>
    <div class="kb-key symbol Backslash">\</div>
    <div class="kb-key Delete fn">Del</div>
  </div>
  <div class="kb-row">
    <div class="kb-key CapsLock fn">CapsLock</div>
    <div class="kb-key key KeyA">a</div>
    <div class="kb-key key KeyS">s</div>
    <div class="kb-key key KeyD">d</div>
    <div class="kb-key key KeyF">f</div>
    <div class="kb-key key KeyG">g</div>
    <div class="kb-key key KeyH">h</div>
    <div class="kb-key key KeyJ">j</div>
    <div class="kb-key key KeyK">k</div>
    <div class="kb-key key KeyL">l</div>
    <div class="kb-key symbol Semicolon">;</div>
    <div class="kb-key symbol Quote">'</div>
    <div class="kb-key Enter fn">Enter</div>
  </div>
  <div class="kb-row">
    <div class="kb-key ShiftLeft fn">Shift</div>
    <div class="kb-key key KeyZ">z</div>
    <div class="kb-key key KeyX">x</div>
    <div class="kb-key key KeyC">c</div>
    <div class="kb-key key KeyV">v</div>
    <div class="kb-key key KeyB">b</div>
    <div class="kb-key key KeyN">n</div>
    <div class="kb-key key KeyM">m</div>
    <div class="kb-key symbol Comma">,</div>
    <div class="kb-key symbol Period">.</div>
    <div class="kb-key symbol Slash">/</div>
    <div class="kb-key ArrowUp fn">▲</div>
    <div class="kb-key ShiftRight fn">Shift</div>

  </div>
  <div class="kb-row">
    <div class="kb-key ControlLeft fn">Ctrl</div>
    <div class="kb-key MetaLeft fn">Win</div>
    <div class="kb-key AltLeft fn">Alt</div>
    <div class="kb-key Space"> </div>
    <div class="kb-key AltRight fn">Alt</div>
    <div class="kb-key ArrowLeft fn">◄</div>
    <div class="kb-key ArrowDown fn">▼</div>
    <div class="kb-key ArrowRight fn">►</div>
    <div class="kb-key ControlRight fn">Ctrl</div>
  </div>
</div>
<p class="description">Keyboard was created in Windows</p>
<p class="description">For switching language - "Shift + Alt"</p>
</div>`;

document.body.insertAdjacentHTML('afterbegin', page);