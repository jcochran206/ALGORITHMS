class Node {
    constructor(data){
        this.data = data;
        this.next=null; 
    }
}

class SLL {
    constructor(){
        this.head = null;
    }

    addFront(value){
        let new_node = new Node(value);
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
    }

    display() {
        let lstr = "";
        if(this.head == null) {
            return lstr;
        }
        lstr += this.head.value;

        let runner = this.head.next;
        while(runner != null){
        lstr += ", " + runner.value;
        runner += runner.next;
        }
        return lstr
    }

}

let SLL2 = new SLL();
SLL2.addFront(15);
SLL2.addFront(13);
SLL2.addFront(11);
console.log(SLL2)
console.log(SLL2.display())
