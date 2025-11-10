// The Context class that uses a strategy
class ShippingCalculator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(packageDetails) {
        // Gọi phương thức calculate của strategy hiện tại
        if (!this.strategy) throw new Error("Shipping strategy not set!");
        return this.strategy.calculate(packageDetails);
    }
}

// The Strategy interface (conceptual in JS)
class ShippingStrategy {
    calculate(packageDetails) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Strategy 1: Flat Rate
class FlatRateStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        return 10; // Phí cố định $10
    }
}

// Concrete Strategy 2: Weight-Based
class WeightBasedStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        const ratePerKg = 3; // $3 mỗi kg
        return packageDetails.weight * ratePerKg;
    }
}

export { ShippingCalculator, FlatRateStrategy, WeightBasedStrategy };
