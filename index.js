do{
var name = prompt("Enter Your Name/Text").trim().toUpperCase()
} while(name !== null && name === "")

print = "Click on any button to change the text to that"

const letters = {
  'A': "..######..<br>..#....#..<br>..######..<br>..#....#..<br>..#....#..<br><br>",
  'B': "..######..<br>..#....#..<br>..#####...<br>..#....#..<br>..######..<br><br>",
  'C': "..######..<br>..#.......<br>..#.......<br>..#.......<br>..######..<br><br>",
  'D': "..#####...<br>..#....#..<br>..#....#..<br>..#....#..<br>..#####...<br><br>",
  'E': "..######..<br>..#.......<br>..#####...<br>..#.......<br>..######..<br><br>",
  'F': "..######..<br>..#.......<br>..#####...<br>..#.......<br>..#.......<br><br>",
  'G': "..######..<br>..#.......<br>..#####...<br>..#....#..<br>..#####...<br><br>",
  'H': "..#....#..<br>..#....#..<br>..######..<br>..#....#..<br>..#....#..<br><br>",
  'I': "..######..<br>....##....<br>....##....<br>....##....<br>..######..<br><br>",
  'J': "..######..<br>....##....<br>....##....<br>..#.##....<br>..####....<br><br>",
  'K': "..#...#...<br>..#..#....<br>..##......<br>..#..#....<br>..#...#...<br><br>",
  'L': "..#.......<br>..#.......<br>..#.......<br>..#.......<br>..######..<br><br>",
  'M': "..#....#..<br>..##..##..<br>..#.##.#..<br>..#....#..<br>..#....#..<br><br>",
  'N': "..#....#..<br>..##...#..<br>..#.#..#..<br>..#..#.#..<br>..#...##..<br><br>",
  'O': "..######..<br>..#....#..<br>..#....#..<br>..#....#..<br>..######..<br><br>",
  'P': "..######..<br>..#....#..<br>..######..<br>..#.......<br>..#.......<br><br>",
  'Q': "..######..<br>..#....#..<br>..#.#..#..<br>..#..#.#..<br>..######..<br><br>",
  'R': "..######..<br>..#....#..<br>..#.##...<br>..#...#...<br>..#....#..<br><br>",
  'S': "..######..<br>..#.......<br>..######..<br>.......#..<br>..######..<br><br>",
  'T': "..######..<br>....##....<br>....##....<br>....##....<br>....##....<br><br>",
  'U': "..#....#..<br>..#....#..<br>..#....#..<br>..#....#..<br>..######..<br><br>",
  'V': "..#....#..<br>..#....#..<br>..#....#..<br>...#..#...<br>....##....<br><br>",
  'W': "..#....#..<br>..#....#..<br>..#.##.#..<br>..##..##..<br>..#....#..<br><br>",
  'X': "..#....#..<br>...#..#...<br>....##....<br>...#..#...<br>..#....#..<br><br>",
  'Y': "..#....#..<br>...#..#...<br>....##....<br>....##....<br>....##....<br><br>",
  'Z': "..######..<br>......#...<br>.....#....<br>....#.....<br>..######..<br><br>",
  ' ': "    ",
  '' : " What"
}

if (name.length > 0) {
  text = name.split("").map(i => letters[i] || "Sorry I cant do those characters only letters<br/>"); // return the character or X if not found
  document.getElementById("content").innerHTML = `<pre>${text.join("</pre><pre>")}</pre>`;
}



const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ Change text color globally
  document.body.style.color = 'darkgreen';
});

const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function onClick(event) {
  // 👇️ Change text color globally
  document.body.style.color = 'darkred';
});

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function onClick(event) {
  // 👇️ Change text color globally
  document.body.style.color = 'darkslateblue';
});

const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', function onClick(event) {
  // 👇️ Change text color globally
  document.body.style.color = 'fuchsia';
});