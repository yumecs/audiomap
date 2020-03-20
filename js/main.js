/*jshint esversion: 6 */
tick (0);

// document.querySelector(".start").addEventListener("click", () => {
let evs =
  [ [ 1000, tick, 1]
  , [ 2000, tick, 2]
  , [ 3000, tick, 3]
  , [ 4000, tick, 4]
  ];

function runEvents(events)
{
  const [ head, ...tail ] = events;
  if (head !== undefined) {
    const [ timeout, action, number ] = head;
    setTimeout(
      () => { tick(number); runEvents(tail); },
      timeout
    );
  }
}

runEvents(evs);

function tick (n) {
    document.querySelector("#timer").textContent = n;
}

function cue (map, n) {

}

var vestiges = new Howl({
  src: ['https://raw.githubusercontent.com/yumecs/dream/master/music/vestiges_final_final_final.mp3']
});

vestiges.play();
