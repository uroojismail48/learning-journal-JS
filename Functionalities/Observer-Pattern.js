class Youtube {
    constructor() {
        this.subscribers = []
    }

    subscribe(user) {
        this.subscribers.push(user)
        user.update(`${user.name} subscribed`)
    }

    unsubscribe(user) {
        this.subscribers = this.subscribers.filter((sub) => sub !== user)
        user.update(`${user.name} you have unsubscribed`)
    }

    notify(message) {
        this.subscribers.forEach((sub) => sub.update(message));
    }
}

class User {
    constructor(name) {
        this.name = name
    }

    update(data) {
        console.log(`${data}`);
    }
}

let zaalima = new Youtube()
let user1 = new User("Urooj")
let user2 = new User("Urooj2")

zaalima.subscribe(user1)
zaalima.subscribe(user2)

zaalima.notify("she's here")