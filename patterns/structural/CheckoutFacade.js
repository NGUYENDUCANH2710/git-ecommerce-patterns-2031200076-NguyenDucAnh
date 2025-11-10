import { InventoryService } from '../../services/InventoryService.js';
import { PaymentService } from '../../services/PaymentService.js';
import { ShippingService } from '../../services/ShippingService.js';

class CheckoutFacade {
    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {
        console.log('--- CheckoutFacade: Starting order process ---');

        // 1. Kiểm tra tồn kho
        const inStock = this.inventoryService.checkStock(orderDetails.productIds);
        if (!inStock) {
            console.log('CheckoutFacade: Order cannot be placed. Some products are out of stock.');
            return;
        }

        // 2. Xử lý thanh toán
        const paymentSuccess = this.paymentService.processPayment(orderDetails.userId, orderDetails.amount);
        if (!paymentSuccess) {
            console.log('CheckoutFacade: Payment failed. Order cannot be completed.');
            return;
        }

        // 3. Sắp xếp vận chuyển
        this.shippingService.arrangeShipping(orderDetails.userId, orderDetails.shippingInfo, orderDetails.productIds);

        console.log('--- CheckoutFacade: Order process completed ---');
    }
}

export { CheckoutFacade };
