ProductOrderPopup = {
    target: 'sideBarBasketTarget',
    createOrderGetUrl: '/product/order/ajax/create',
    shippingPostUrl: '/product/order/ajax/create/shipping',
    paymentPostUrl: '/product/order/create/payment',
    createOrderPostUrl: '/product/order/ajax/create',
    init: function(config){
        // for config
        if(config!==undefined){
            this.basketId=config.basketId;
            if(config.target!==undefined) this.target=config.target;
            if(config.basket!==undefined) this.basket.init(config.basket);
            if(config.createOrderGetUrl!==undefined) this.createOrderGetUrl=config.createOrderGetUrl;
            if(config.shippingPostUrl!==undefined) this.shippingPostUrl=config.shippingPostUrl;
            if(config.paymentPostUrl!==undefined) this.paymentPostUrl=config.paymentPostUrl;
            if(config.createOrderPostUrl!==undefined) this.createOrderPostUrl=config.createOrderPostUrl;
        }
    },
    basket: {
        id: null,
        listGetUrl: '/basket',
        addProductPostUrl: '/basket/add',
        removeProductPostUrl: '/basket/remove',
        setProductCountPostUrl: '/basket/setCount.json',
        emptyPostUrl: '/basket/empty.json',
        getCountGetUrl: '/basket/getCount.json',
        init: function(config){
            if(config.id!==undefined) this.id=config.id;
            if(config.listGetUrl!==undefined) this.listGetUrl=config.listGetUrl;
            if(config.addProductPostUrl!==undefined) this.addProductPostUrl=config.addProductPostUrl;
            if(config.removeProductPostUrl!==undefined) this.removeProductPostUrl=config.removeProductPostUrl;
            if(config.setProductCountPostUrl!==undefined) this.setProductCountPostUrl=config.setProductCountPostUrl;
            if(config.emptyPostUrl!==undefined) this.emptyPostUrl=config.emptyPostUrl;
            if(config.getCountGetUrl!==undefined) this.getCountGetUrl=config.getCountGetUrl;
        },
        productList: function(orderType, callback){
            orderType = orderType | 1;
            var params = 'orderType='+orderType;
            if(this.id!==null) params += '&basketId='+this.id;
            ProductOrderPopup._get(this.listGetUrl+'?'+params, null, function(data){
                $('#'+ProductOrderPopup.target).html(data);
                if(callback!==undefined) callback(data);
            });
        },
        addProduct: function(id, count, callback){
            var _this = this;
            var params = "productId="+id;
            params += "&count="+count;
            if(this.id!==null) params += '&basketId='+this.id;
            ProductOrderPopup._post(this.addProductPostUrl+'?'+params, null, function(data){
                _this.productList();
                _this.setProductTotalCount();
                if(callback!==undefined) callback(data);
            });
        },
        instantBuy: function(id, count, callback){
            var params = "productId="+id;
            params += "&count="+count;
            if(this.id!==null) params += '&basketId='+this.id;
            ProductOrderPopup._post(this.addProductPostUrl, params, function(data){
                $('#'+ProductOrderPopup.target).html(data);
                if(callback!==undefined) callback(data);
            });
        },
        increaseProductCount: function(id, step, callback){
            var count = parseInt($('#basketProduct'+id).val());
            this.setProductCount(id, count+step, callback);
        },
        decreaseProductCount: function(id, step, callback){
            var count = parseInt($('#basketProduct'+id).val());
            this.setProductCount(id, count-step, callback);
        },
        setProductCount: function(id, count, callback){
            var _this = this;
            var params = "productId="+id;
            params += "&count="+count;
            if(this.id!==null) params += '&basketId='+this.id;
            ProductOrderPopup._post(this.setProductCountPostUrl+'?'+params, null, function(data){
                _this.productList();
                _this.setProductTotalCount();
                if(callback!==undefined) callback(data);
            });
        },
        setProductTotalCount: function(callback){
            var params = null;
            if(this.id!==null) params = 'basketId='+this.id;
            ProductOrderPopup._get(this.getCountGetUrl, params, function(data){
                if(data.type==="SUCCESS") $('.basketProductTotalCount').html(data.text);
                if(callback!==undefined) callback(data);
            });
        },
        removeProduct: function(id, callback){
            var _this = this;
            var params = "productId="+id;
            if(this.id!==null) params += '&basketId='+this.id;
            ProductOrderPopup._post(this.removeProductPostUrl, params, function(data){
                _this.productList();
                _this.setProductTotalCount();
                if(callback!==undefined) callback(data);
            });
        },
        empty: function(callback){
            var _this = this;
            ProductOrderPopup._post(this.emptyPostUrl, params, function(data){
                _this.productList();
                if(callback!==undefined) callback(data);
            });
        }
    },
    createOrderGet: function(callback){
        var _this = this;
        if(this.basket.id!==null){
            this._get(this.createOrderGetUrl, 'basketId='+this.basket.id, function(data){
                $('#'+_this.target).html(data);
                if(callback!==undefined) callback(data);
            });
        }else{
            this._setBasketId();
        }
    },
    shippingPost: function(callback){
        this._post(this.shippingPostUrl, $('#orderShippingForm').serialize(), function(data){
            $('#'+this.target).html(data);
            if(callback!==undefined) callback(data);
        });
    },
    paymentPost: function(callback){
        var _this = this;
        this._post(this.paymentPostUrl, $('#orderPaymentForm').serialize(), function(data){
            $('#'+_this.target).html(data);
            if(callback!==undefined) callback(data);
        });
    },
    createOrderPost: function(callback){
        var _this = this;
        if(this.basket.id!==null){
            $('#basketId').val(this.basket.id);
            $('#shipDeliveryDate').val($('#shipDeliveryDate').val()+' 00:00');
            this._post(this.createOrderPostUrl, $('#orderForm').serialize(), function(data){
                $('#'+_this.target).html(data);
                if(callback!==undefined) callback(data);
            });
        }else{
            this._setBasketId();
        }
    },
    _get: function(url, params, callback){
        $.get(url, params, function(data){
            if(callback!==undefined) callback(data);
        }).fail(function(xhr){
            if(xhr.status===401){
                // $.get('/signin', function (data) {
                //     $('#sideBarProfileTarget').html(data);
                // });
                window.location.href = '/signin';
            }
        });
    },
    _post: function(url, params, callback){
        $.post(url, params, function(data){
            if(callback!==undefined) callback(data);
        }).fail(function(xhr){
            if(xhr.status===401){
                // $.get('/signin', function (data) {
                //     $('#sideBarProfileTarget').html(data);
                // });
                window.location.href = '/signin';
            }
        });
    },
    _setBasketId: function(){
        var _this = this;
        $.get("/api/basket/get.json", null, function(data){
            _this.basket.id = data.id
        }).fail(function(xhr){
            if(xhr.status===401){
                // $.get('/signin', function (data) {
                //     $('#sideBarProfileTarget').html(data);
                // });
                window.location.href = '/signin';
            }
        });
    }
};