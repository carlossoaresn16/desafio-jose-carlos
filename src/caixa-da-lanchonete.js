class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let productsWithValues = {
            'cafe': 3,
            'chantily': 1.5,
            'suco': 6.2,
            'sanduiche': 6.5,
            'queijo': 2,
            'salgado': 7.25,
            'combo1': 9.5,
            'combo2': 7.5
        }

        let value = 0;
        let quantityZero = false;
        let invalidItem = false;
        let invalidPayment = false;
        let count = 0;

        let hasChatily = false;
        let hasCoffe = false;

        let hasCheese = false;
        let hasSandwich = false;

        while (count < itens.length) {
            let item = itens[count];

            let organizedItem = item.split(',');

            let product = organizedItem[0];
            let quantity = organizedItem[1];

            let productPrice = productsWithValues[product];

            if (product == "cafe") {
                hasCoffe = true;
            }

            if (product == "chantily") {
                hasChatily = true;
            }

            if (product == "queijo") {
                hasCheese = true;
            }

            if (product == "sanduiche") {
                hasSandwich = true;
            }

            if (quantity == 0) {
                quantityZero = true;
                break;
            }

            if (!productPrice) {
                invalidItem = true;
                break;
            }

            switch (metodoDePagamento) {
                case 'debito':
                    value += (productPrice) * quantity;
                    break;
                case 'credito':
                    value += (productPrice + (productPrice * 0.03)) * quantity;
                    break;
                case 'dinheiro':
                    value += (productPrice - (productPrice * 0.05)) * quantity
                    break;
                default:
                    invalidPayment = true;
            }

            count++;
        };

        let withoutMainProductMessage = "Item extra não pode ser pedido sem o principal";

        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!";
        }

        if (quantityZero) {
            return "Quantidade inválida!";
        }

        if (invalidItem) {
            return "Item inválido!";
        }

        if (invalidPayment) {
            return "Forma de pagamento inválida!";
        }

        if (hasChatily && !hasCoffe) {
            return withoutMainProductMessage;
        }

        if (hasCheese && !hasSandwich) {
            return withoutMainProductMessage;
        }

        return `R$ ${value?.toFixed(2).toString()?.replace('.', ',')}`;
    }

}

export { CaixaDaLanchonete };
