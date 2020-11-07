//define cart as a global variable
let cart = {
    list: [], //store an empty array

    //store the modified stringified version of an array into localStorage so that it can be still accessed in other pages
    write() {
        localStorage.setItem("cart", JSON.stringify(cart.list));
    },

    //Add the list of cart items in the cart.list and return the cart.list
    read() {
        return cart.list = JSON.parse(localStorage.getItem("cart") || '[]');
    },

    //add the item to the list 
    //If the same color and size of an item is selected again, add the same item on the list by increasing the quantity of the item by 1.
    add(item) {
        let _item = cart.list.find(({ color, size }) => item.color === color && item.size === size);

        if (_item) {
            _item.quantity++;
            return cart.write();
        }

        cart.list = [...cart.list, item];
        cart.write();
    },

    //remove the index of an item from the list 
    remove(index) {
        cart.list = cart.list.filter((_, _index) => index !== _index);
        cart.write();
    },

    //increase the amount of item (index of an item) by 1 
    increase(index, count = 1) {
        cart.list[index].quantity += count;
        cart.write();
    },

    //decrease the amount of item (index of an item) by 1
    //If the quantity of the item is less than or equal to 0, ask the user to remove the item or not. If the user says yes, remove it. If not, set the quantity as 1.
    decrease(index, count = 1) {
        cart.list[index].quantity -= count;

        if (cart.list[index].quantity <= 0) {
            if (confirm('Remove this item?')) {
                return cart.remove(index);
            } else {
                cart.list[index].quantity = 1;
            }
        }

        cart.write();
    },

    //reset the items in the cart by making the array empty
    clear() {
        cart.list = []; 
        cart.write();
    },
};

cart.read();