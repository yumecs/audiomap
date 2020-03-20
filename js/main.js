/*jshint esversion: 6 */
let ticks = 0;
function ticker()
{
    ticks += 1;
    setTimeout(
      () => {
          tick(ticks);
          ticker();
      },
      1000
    );
}
let sounds =
  [ [ 1000, cue, 1]
  , [ 2000, cue, 1]
  , [ 3000, cue, 1]
  , [ 4000, cue, 1]
  , [ 5000, cue, 1]
  , [ 6000, cue, 1]
  , [ 7000, cue, 1]
  ];

let celes = new Howl({
    src: ['https://raw.githubusercontent.com/yumecs/audiomap/master/voices/celes.mp3']
});

let dot = new Howl({
    src: ['https://raw.githubusercontent.com/yumecs/audiomap/master/voices/dot.mp3']
});

let start = 0;

const voices = [celes, dot];

function runEvents(events)
{
  const [ head, ...tail ] = events;
  if (head !== undefined) {
    let [ timeout, action, number ] = head;
    let temp = timeout;
    timeout = timeout - start;
    start = temp;
    setTimeout(
      () => {
          action(voices, number);
          runEvents(tail);
      },
      timeout
    );
  }
}

runEvents(sounds);
ticker();

function tick (n) {
    document.querySelector("#timer").textContent = n;
}

function cue (ls, n) {
    voices[n].play();
}
