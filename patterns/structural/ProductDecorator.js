// Base Decorator
class ProductDecorator {
    constructor(product) {
        this.product = product;
    }

    getPrice() {
        return this.product.getPrice();
    }

    getDescription() {
        return this.product.getDescription();
    }
}

// Concrete Decorator for Gift Wrapping
class GiftWrapDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        // Giá gốc + $5 cho gift wrap
        return this.product.getPrice() + 5;
    }

    getDescription() {
        // Mô tả gốc + ", gift wrapped"
        return this.product.getDescription() + ', gift wrapped';
    }
}

// Concrete Decorator for Extended Warranty
class ExtendedWarrantyDecorator extends ProductDecorator {
    constructor(product) {
        super(product);
    }

    getPrice() {
        // Giá gốc + $20 cho bảo hành mở rộng
        return this.product.getPrice() + 20;
    }

    getDescription() {
        // Mô tả gốc + ", with extended warranty"
        return this.product.getDescription() + ', with extended warranty';
    }
}

// Base Product class
class BaseProduct {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    getPrice() {
        return this._price;
    }

    getDescription() {
        return this._name;
    }
}

export { ProductDecorator, GiftWrapDecorator, ExtendedWarrantyDecorator, BaseProduct };
