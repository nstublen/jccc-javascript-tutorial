var _sections =
[
    {
        name: 'intro',
        title: 'Introduction to JavaScript',
        steps: ['', '', '']
    },
    {
        name: 'variables',
        title: 'JavaScript Variables',
        steps: ['', 'Numbers', 'Strings', 'Booleans', 'Logical Comparison',
                'Logical Operators', 'Strict Equality',
                'Undefined and Null Values']
    },
    {
        name: 'exercise-01',
        title: 'Exercise 1',
        steps: ['', '', '']
    },
    {
        name: 'functions',
        title: 'JavaScript Functions',
        steps: ['Functions', 'Unspecified Parameters', 'The arguments Property']
    },
    {
        name: 'objects',
        title: 'JavaScript Objects',
        steps: ['Objects', 'Objects', 'Arrays', 'Pass by Value and Reference']
    },
    {
        name: 'page-elements',
        title: 'Page Elements',
        steps: ['Finding Elements', 'Creating Elements', 'Inserting Elements']
    },
    {
        name: 'exercise-02',
        title: 'Exercise 2',
        steps: ['']
    },
    {
        name: 'exercise-03',
        title: 'Exercise 3',
        steps: ['']
    },
    {
        name: 'function-objects',
        title: 'Function Objects',
        steps: ['Function Variables', 'Functions Without Names',
            'Functions as Object Properties'/*, 'The document Object'*/]
    },
    {
        name: 'events',
        title: 'Events',
        steps: ['Event Properties', 'Multiple Handlers', 'Mouse Events',
                'Keyboard Events', 'Frame/Object Events', 'Form Events',
                'Event Objects']
    },
    {
        name: 'exercise-04',
        title: 'Exercise 4',
        steps: ['', '']
    },
    {
        name: 'object-constructors',
        title: 'Object Constructors',
        steps: ['Initialization Functions', 'Using new and this']
    },
    {
        name: 'prototype-functions',
        title: 'Prototype Functions',
        steps: ['Sharing Functions', 'Using Prototype Functions']
    },
    {
        name: 'exercise-05',
        title: 'Exercise 5',
        steps: ['', '']
    },
];

function findSectionInfo(sectionName) {
    for (var index = 0; index < _sections.length; ++index) {
        if (_sections[index].name == sectionName) {
            return _sections[index];
        }
    }
    return null;
}

function createIndexLinkElement() {
    var anchor = document.createElement("a");
    anchor.href = "../index.html";
    anchor.innerHTML = "Index";
    return anchor;
}

function createIntroLinkElement() {
    var anchor = document.createElement("a");
    anchor.href = "./intro.html";
    anchor.innerHTML = "Intro";
    return anchor;
}

function createSectionLinkElement(number, section) {
    var numberString = ((number < 10) ? "0" : "") + number;
    var anchor = document.createElement("a");
    anchor.href = "./" + numberString + "-" + section.name + "/intro.html";
    anchor.innerHTML = numberString + " - " + section.title;
    return anchor;
}

function createStepLinkElement(step, title) {
    var anchor = document.createElement("a");
    anchor.href = "./step-" + ((step < 10) ?  "0" : "") + step + ".html";
    anchor.setAttribute("title", title);
    anchor.innerHTML = "Step " + step;
    return anchor;
}

function insertContentLinks(sections) {
    var ul = document.createElement("ul");

    for (var step = 1; step <= sections.length; ++step) {
        li = document.createElement("li");
        anchor = createSectionLinkElement(step, sections[step - 1]);
        li.appendChild(anchor);
        ul.appendChild(li);
    }
    
    var contents = document.getElementById("contents");
    if (contents) {
        contents.appendChild(ul);
    }
}

function insertNavLinks(header, sectionInfo) {
    var anchors = [];
    
    var navs = header.getElementsByTagName("nav");
    for (var navIndex = 0; navIndex < navs.length; ++navIndex) {
        var nav = navs[navIndex];
        
        var ul = document.createElement("ul");

        var li = document.createElement("li");
        var anchor = createIndexLinkElement();
        li.appendChild(anchor);
        ul.appendChild(li);
        anchors = anchors.concat(anchor);

        var li = document.createElement("li");
        var anchor = createIntroLinkElement();
        li.appendChild(anchor);
        ul.appendChild(li);
        anchors = anchors.concat(anchor);
        
        for (var step = 1; step <= sectionInfo.steps.length; ++step) {
            li = document.createElement("li");
            anchor = createStepLinkElement(step, sectionInfo.steps[step - 1]);
            li.appendChild(anchor);
            ul.appendChild(li);
            anchors = anchors.concat(anchor);
        }
        
        nav.appendChild(ul);
    }
    
    for (var anchorIndex = 0; anchorIndex < anchors.length; ++anchorIndex) {
        anchor = anchors[anchorIndex];
        if (anchor.href === window.location.href) {
            anchor.setAttribute('style', 'font-weight: bold; text-decoration: none');
            break;
        }
    }
}

function updateHeader() {
    var header = document.getElementsByTagName("header");
    if (header.length > 0) {
        var sectionName = header[0].getAttribute("data-section");

        var sectionInfo = findSectionInfo(sectionName);
        if (!sectionInfo) {
            return;
        }

        updateTitle(header[0], sectionInfo);
        insertNavLinks(header[0], sectionInfo);
    }
}

function updateTitle(header, sectionInfo) {
    var head = document.getElementsByTagName("head");
    var title = head[0].getElementsByTagName("title");
    title[0].innerHTML = sectionInfo.title;

    var h1s = header.getElementsByTagName("h1");
    for (var h1Index = 0; h1Index < h1s.length; ++h1Index) {
        var h1 = h1s[h1Index];
        h1.innerHTML = sectionInfo.title;
    }
}

function initProgressiveReveal() {
    var nextReveal = 1;
    
    function handleClick(e) {
        if (e.type === "keydown" && e.keyCode != 13 && e.keyCode != 32) {
            return;
        }

        var elements = document.querySelectorAll(".progressive" + nextReveal);
        if (elements.length > 0) {
            for (var elementIndex = 0; elementIndex < elements.length; ++elementIndex) {
                var element = elements[elementIndex];
                var classIndex = element.className.indexOf("progressive" + nextReveal);
                element.className = element.className.slice(0, classIndex) + " " + element.className.slice(classIndex + 13);
                element.scrollIntoView(false);
            }
        } else {
            document.body.setAttribute("style", "border-color: lime");
        }
        nextReveal++;
    }
    
    function prepareClicks() {
        document.addEventListener('keydown', handleClick);
        document.addEventListener('click', handleClick);
    }
    
    function prepareReveal() {
        for (var index = 1; index <= 8; ++index) {
            var elements = document.querySelectorAll(".progressive" + index);
            for (var elementIndex = 0; elementIndex < elements.length; ++elementIndex) {
                var element = elements[elementIndex];
                element.className = "progressive " + element.className;
            }
        }
    }
    
    prepareReveal();
    prepareClicks();
}

updateHeader();
insertContentLinks(_sections);

initProgressiveReveal();
