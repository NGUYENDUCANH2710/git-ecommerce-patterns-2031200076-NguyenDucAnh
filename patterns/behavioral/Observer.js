// Subject
class OrderTracker {
    constructor(orderId) {
        this.orderId = orderId;
        this.status = 'New';
        this.observers = [];
    }

    addObserver(observer) {
        // Thêm observer vào danh sách
        this.observers.push(observer);
    }

    removeObserver(observer) {
        // Loại bỏ observer khỏi danh sách
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        // Gọi update cho tất cả observer
        this.observers.forEach(observer => observer.update(this.orderId, this.status));
    }

    updateStatus(newStatus) {
        this.status = newStatus;
        console.log(`Order ${this.orderId} status updated to: ${this.status}`);
        this.notifyObservers();
    }
}

// Observer interface
class OrderObserver {
    update(orderId, status) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Observers
class EmailNotifier extends OrderObserver {
    update(orderId, status) {
        console.log(`[Email] Order ${orderId} is now ${status}`);
    }
}

class DashboardNotifier extends OrderObserver {
    update(orderId, status) {
        console.log(`[Dashboard] Order ${orderId} status changed: ${status}`);
    }
}

export { OrderTracker, EmailNotifier, DashboardNotifier };
