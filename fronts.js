class Node {
    constructor(value){
        this.value = value;
        this.next=null; 
    }
}

class SLL {
    constructor() {
        this.head = null
    }

    addFront(value){
        let new_node = new Node(value);
        new_node.next = this.head;
        this.head = new_node;
        return this.head;
    }

    removeFront(){
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return this.head;
    }

    front() {
        if(!this.head) {
            this.head = new_node;
            return this;
        }else{
            return this.head.value; 
        }
    }

    //contains 
    contains(value){
        let runner = this.head;
        while(runner){
            if(runner.value === value){
                return true
            }
            runner = runner.next
        }
        return false
    }
    //length of sll
    length(){
        let runner = this.head;
        let numNodes = 0;
        while(runner){
            numNodes++;
            runner = runner.next;
        }
        return numNodes;
    }
    //display 
    display(){
        let listStr = ""; //empty
        if(this.head == null){
            return listStr;
        } 
        listStr += this.head.value;
        let runner = this.head.next;
        while(runner != null){
            listStr += " , " + runner.value;
            runner = runner.next
        }
        return listStr; 
    }

    maxMinAvg() {
        let sum = 0;
        let max = this.head.value;
        let min = this.head.value;
        let runner = this.head;
        while(runner){
            sum += runner.value;
            if(runner.value > max){
                max = runner.value
            }
            else if(runner.value < min){
                min = runner.value;
            }
            runner = runner.next;
        }
        return `max: ${max}, min: ${min}, avg: ${sum/this.length()}`
    }
    //back
    back(){
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        return runner.value
    }
    //removeBack()
    removeBack(){
        let runner = this.head;
        while(runner.next.next){
            runner = runner.next
        }
        runner.next = null;
        return this
    }
    //addBack
    addBack(value){
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        runner.next = new Node(value);
        return this
    }

}

let SLL1 = new SLL();
SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(30);
SLL1.removeFront();
SLL1.contains(18);
SLL1.addBack(2);
SLL1.addBack(8);
console.log('front value',SLL1.front())
console.log( 'sll state',SLL1);
console.log('sll data is:', SLL1.contains(18));
console.log('sll length is:', SLL1.length());
console.log('display', SLL1.display());
console.log('min max: ', SLL1.maxMinAvg());







