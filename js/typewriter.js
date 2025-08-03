document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    {
      id: "intro",
      lines: [
        "/**",
        " * A birthday message compiled and executed from the heart.",
        " * August 4th.. A magical day in the calendar..",
        " * The birthday of my favorite person in the universe..",
        " */",
        "",
        'Princess princess = new Princess("Rambha");',
        "Date today = new Date();",
        "Akash me = new Akash();",
        "me.fallInLove(princess);",
        "me.makeHerSmileDaily();",
        "me.keepPromisesForever();",
        'SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");',
        "String current = dateFormat.format(today);",
        'if(current.equals("2025-08-04")) {',
        "love.age++;",
        'me.celebrate("2025-08-04", "Birthday of my soulmate");',
        'System.out.println("You\'re not just special, you\'re everything. ");'
      ]
    },
    {
      id: "timeline",
      lines: [
        "// Timeline of unforgettable moments ",
        "List<Memory> timeline = new ArrayList();",
        'timeline.add("First laugh together");',
        'timeline.add("Random long walks & talks");',
        'timeline.add("Your sleepy voice at night");',
        'timeline.add("Your cute & innocent smile");',
        'timeline.add("When you said: \'I love you\'");',
        'timeline.add("Every single moment with you");'
      ]
    },
    {
      id: "wishes",
      lines: [
        "// Wishes being sent in an infinite loop ",
        "while(true) {",
        "    princess.happiness++;",
        "    princess.love += ∞ ;",
        '    princess.dreams = "fulfilled";',
        "    Akash.support(princess);",
        '    System.out.println("You deserve everything beautiful ");',
        "}"
      ]
    },
    {
      id: "promises",
      lines: [
        "// Class of Eternal Promises ",
        "class Promise {",
        '    String to = "Rambha";',
        "    public void keep() {",
        '        System.out.println("I\'ll stand beside you, no matter what.");',
        '        System.out.println("I\'ll never stop loving you.");',
        '        System.out.println("I\'ll lift you when you\'re down.");',
        '        System.out.println("I\'ll be your forever home ");',
        "    }",
        "}",
        "Promise p = new Promise();",
        "p.keep();"
      ]
    }
  ];

  const cursorHTML = '<span class="cursor" style="color: white; background: black;">|</span>';

  function highlightSyntax(line) {
    return line
    //   .replace(/(\/\/.*)/g, '<span style="color: #6a9955;">$1</span>') // comments
      .replace(/("(?:[^"\\]|\\.)*")/g, '<span style="color: #ce9178;">$1</span>') // strings
      .replace(/\b(class|public|void|new|if|while|true|String|List|Date|SimpleDateFormat)\b/g, '<span style="color: #569cd6;">$1</span>') // keywords
      .replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span style="color: #4ec9b0;">$1</span>'); // class names
  }

  function typeLinesSequentially(sectionIndex = 0) {
    if (sectionIndex >= sections.length) return;

    const { id, lines } = sections[sectionIndex];
    const container = document.querySelector(`#${id} #code`);
    container.innerHTML = "";

    let lineIndex = 0;

    function typeLine() {
      if (lineIndex >= lines.length) {
        setTimeout(() => typeLinesSequentially(sectionIndex + 1), 500);
        return;
      }

      const line = lines[lineIndex++];
      const span = document.createElement("span");
      container.appendChild(span);
      let charIndex = 0;

      const rawText = line;
      const highlighted = highlightSyntax(line);

      function typeChar() {
        // Show partially typed HTML safely
        let partial = highlighted
          .replace(/<[^>]*>/g, "") // strip tags for character count
          .substring(0, charIndex);

        // Highlight only the typed part
        let display = highlightSyntax(partial) + cursorHTML;
        span.innerHTML = display;

        charIndex++;
        // container.scrollIntoView({ behavior: "smooth", block: "end" });

        if (charIndex <= rawText.length) {
          setTimeout(typeChar, 60);
        } else {
          span.innerHTML = highlightSyntax(rawText);
          container.appendChild(document.createElement("br"));
          setTimeout(typeLine, 300);
        }
      }

      if (line === "") {
        container.appendChild(document.createElement("br"));
        setTimeout(typeLine, 300);
      } else {
        typeChar();
      }
    }

    typeLine();
  }

  typeLinesSequentially();
});
