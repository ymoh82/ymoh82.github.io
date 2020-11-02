const cart = {
    list: [],

    write() {
        localStorage.setItem("cart", JSON.stringify(cart.list));
    },

    read() {
        return cart.list = JSON.parse(localStorage.getItem("cart") || '[]');
    },

    add(item) {
        const _item = cart.list.find(({ color, size }) => item.color === color && item.size === size);

        if (_item) {
            _item.quantity++;
            return cart.write();
        }

        cart.list = [...cart.list, item];
        cart.write();
    },

    remove(index) {
        cart.list = cart.list.filter((_, _index) => index !== _index);
        cart.write();
    },

    increase(index, count = 1) {
        cart.list[index].quantity += count;
        cart.write();
    },

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

    clear() {
        cart.list = [];
        cart.write();
    },
};

cart.read();