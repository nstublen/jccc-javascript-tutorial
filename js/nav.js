var _sections =
[
    {
        name: 'intro',
        title: 'Introduction to JavaScript',
        steps: 3
    },
    {
        name: 'variables',
        title: 'JavaScript Variables',
        steps: 6
    },
    {
        name: 'functions',
        title: 'JavaScript Functions',
        steps: 1
    },
    {
        name: 'objects',
        title: 'JavaScript Objects',
        steps: 3
    }
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

function createStepLinkElement(step) {
    var anchor = document.createElement("a");
    anchor.href = "./step-" + ((step < 10) ?  "0" : "") + step + ".html";
    anchor.innerHTML = "Step " + step;
    return anchor;
}

function insertNavLinks(header, sectionInfo) {
    var navs = header.getElementsByTagName("nav");
    for (var navIndex = 0; navIndex < navs.length; ++navIndex) {
        var nav = navs[navIndex];
        
        var ul = document.createElement("ul");

        var li = document.createElement("li");
        var anchor = createIndexLinkElement();
        li.appendChild(anchor);
        ul.appendChild(li);
        
        for (var step = 1; step <= sectionInfo.steps; ++step) {
            li = document.createElement("li");
            anchor = createStepLinkElement(step);
            li.appendChild(anchor);
            ul.appendChild(li);
        }
        
        nav.appendChild(ul);
    }
}

function updateHeader() {
    var header = document.getElementsByTagName("header");
    var sectionName = header[0].getAttribute("data-section");

    var sectionInfo = findSectionInfo(sectionName);
    if (!sectionInfo) {
        return;
    }

    updateTitle(header[0], sectionInfo);
    insertNavLinks(header[0], sectionInfo);
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

updateHeader();
