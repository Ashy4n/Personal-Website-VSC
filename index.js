//Write in time function - to animate HTML

const removeLast = async (text) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text.slice(0, -1));
        }, deleteSpeed)
    })
}

const addFirst = async (text, i) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text.slice(i, i + 1));
        }, writeSpeed)
    })
}

const waitTime = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, waitValue)
    })
}

const removeInTime = async (text) => {
    do {
        const result = await removeLast(text);
        prop.innerHTML = result;
        text = result;
    } while (text.length > 0)
}

const addInTime = async (text) => {
    let currentText = '';
    let i = 0;
    do {
        currentText += await addFirst(text, i);
        prop.innerHTML = currentText;
        i++;
    } while (currentText.length != text.length)
}

const writeAndDel = async (element) => {
    const prop = document.getElementById('prop');
    await waitTime();
    await removeInTime(prop.innerHTML);
    await addInTime(element);
}

const writingAnimation = async (list) => {
    let i = 0;
    do {
        await writeAndDel(list[i]);
        i++;
        if (i == list.length) i = 0;
    } while (0 != 1) //infinite loop
}

//Values to config animation
const writeSpeed = 200;
const deleteSpeed = 150;
const waitValue = 1000;

//Writen text table
const props = [
    'FrontEnd',
    'React',
    'DogLover',
    'Junior',
    'Gamer',
    'Mateusz'
]

writingAnimation(props);


// Nav control

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener('click', () => {
    if (home.classList.contains('hidden')) {
        home.classList.remove('hidden');
        about.classList.add('hidden');
        contact.classList.add('hidden');
        homeBtn.classList.add('active');
        aboutBtn.classList.remove('active');
        contactBtn.classList.remove('active');
    }
})
aboutBtn.addEventListener('click', () => {
    if (about.classList.contains('hidden')) {
        home.classList.add('hidden');
        about.classList.remove('hidden');
        contact.classList.add('hidden');
        homeBtn.classList.remove('active');
        aboutBtn.classList.add('active');
        contactBtn.classList.remove('active');
    }
})
contactBtn.addEventListener('click', () => {
    if (contact.classList.contains('hidden')) {
        home.classList.add('hidden');
        about.classList.add('hidden');
        contact.classList.remove('hidden');
        homeBtn.classList.remove('active');
        aboutBtn.classList.remove('active');
        contactBtn.classList.add('active');
    }
})
