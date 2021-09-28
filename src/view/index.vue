<template>
    <div>
      <div class="wrap">
        <div class="header">
          <p class="time">12:58</p>
          <div class="img_box_wrap">
            <div class="img_box">
              <img class="lte" src="@/assets/img/lte.png" alt="">
            </div>
            <div class="img_box">
              <img class="battery" src="@/assets/img/battery.png" alt="">
            </div>
          </div>
        </div>
        <div class="shop_head">
          <div class="cnt_head">
            <span class="order_num">3</span>
            <button class="btn"><img src="@/assets/img/search.png" alt=""></button>
            <button class="btn"><img src="@/assets/img/order.png" alt=""></button>
            <button class="btn"><img src="@/assets/img/language.png" alt=""></button>
          </div>
          <div class="cnt_body">
            <div class="ttl_area">
              <h2><span>GS25</span> 서울대병원점<span class="market_box"><img src="@/assets/img/market.png" alt=""></span>
              </h2>
              <div class="sales_box">
                <span><span class="light">light</span>영업중</span>
              </div>
            </div>
            <div class="sales_time">
              <div class="time_box">
                <img src="@/assets/img/ic_clock.png" alt="">
              </div>
              <div class="time_limit">영업시간</div>
              <div class="time">08:00 ~ 22:00</div>
            </div>
          </div>
          <div class="shop_body">
            <div class="shop_body_head">
              <ul class="tag_list">
                <li class="active">ALL</li>
                <li>간편식사</li>
                <li>즉석조리</li>
                <li>음료</li>
                <li>아이스크림</li>
                <li>아이스크림</li>
                <li>아이스크림</li>
                <li>아이스크림</li>
              </ul>
            </div>
            <div class="shop_body_body">
              <div class="shop_body_body_head">
                <div class="txt_area">
                  <div class="all_product">총 <span>99</span>개 상품</div>
                  <div class="sales_category">판매순
                    <button class="down_btn">
                      <img src="@/assets/img/ic_back_down.png" alt="">
                    </button>
                  </div>
                </div>
                <div class="sales_category_list">
                  <div class="grid_area" @click="detailTabShow=1" :class="detailTabShow === 1 ? 'is_active':''">
                    <button class="btn grid">
                      <img src="@/assets/img/ic_grid_2.png" alt="" v-if="detailTabShow === 1">
                      <img src="@/assets/img/ic_grid.png" alt="" v-if="detailTabShow === 2">
                    </button>
                  </div>
                  <div class="column_area" @click="detailTabShow=2" :class="detailTabShow === 2 ? 'is_active':''">
                    <button class="btn column">
                      <img src="@/assets/img/ic_list_2.png" alt="" v-if="detailTabShow === 1">
                      <img src="@/assets/img/ic_list.png" alt="" v-if="detailTabShow === 2">
                    </button>
                  </div>
                </div>
              </div>
              <div class="shop_body_body_body">
                <div class="grid grid_5" :class="detailTabShow === 2 ? 'is_list':''">
                  <a tabindex="0" class="col col_6" v-for="(item, i) in productData" :key="'product'+i">
                    <div class="thumb_area">
                      <figure class="thumb">
                        <img src="@/assets/img/product.png" alt="">
                      </figure>
                    </div>
                    <div class="txt_area">
                      <p>{{ item.name }}</p>
                      <p><span>{{ item.price }}</span> 원</p>
                    </div>
                    <div class="cart_btn_area">
                      <div class="cart_btn">
                        <img src="@/assets/img/cart.png" alt="">
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      productData: [
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
      ],
      productData2: [
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
        {
          name: '빙그레) 바나나맛 우유',
          price: '4,800',
        },
      ],
      detailTabShow: 1,
    }
  },
  methods: {

  },
}
</script>

<style scoped>

.wrap {
  background-color: #0f8385;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 17px;
}

.header .time {
  color: #fff;
  font-size: 12px;
}

.header .img_box {
  display: inline-block;
  width: 12px;
  height: 12px;
}

.header .img_box .lte {
  width: 100%;
}

.header .img_box .battery {
  width: 100%;
}

.shop_head .cnt_head {
  position: relative;
  padding: 0 17px;
  margin-top: 25px;
  text-align: right;
  background-color: #0f8385;
}

.shop_head .cnt_head .btn {
  width: 21px;
  height: 21px;
  margin: 0 10px;
}

.shop_head .cnt_head .order_num {
  position: absolute;
  display: inline-block;
  top: -8px;
  right: 58px;
  padding: 2.5px 4px;
  border-radius: 50%;
  background-color: #a50034;
  font-size: 9px;
  color: #fff;
  z-index: 1;
}

.shop_head .cnt_head .btn:last-of-type {
  margin: 0 0 0 10px;
}

.shop_head .cnt_head .btn img {
  width: 100%;
}

.shop_head .cnt_body {
  margin: 30px 0 40px;
  padding: 0 17px;
}

.shop_head .cnt_body .ttl_area h2 {
  font-size: 20px;
  font-weight: 500;
  color: #fff;
}

.shop_head .cnt_body .ttl_area {
  display: flex;
  align-items: center;
}

.shop_head .cnt_body .ttl_area h2 span {
  font-size: 24px;
  font-weight: 700;
}

.shop_head .cnt_body .market_box {
  display: inline-block;
  vertical-align: 2px;
  margin: 0 5px;
  width: 18px;
  height: 18px;
}

.shop_head .cnt_body .market_box img {
  width: 100%;
}

.shop_head .cnt_body .sales_box {
  font-size: 0;
  position: relative;
  margin-left: 6px;
  width: 48.5px;
  height: 18px;
  line-height: 18px;
  border-radius: 7.5px;
  background-color: rgba(255, 255, 255, 0.21);
}

.shop_head .cnt_body .sales_box::before {
  position: absolute;
  content: '';
  width: 1px;
  height: 12px;
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.6);
}

.shop_head .cnt_body .sales_box span {
  font-size: 9px;
  font-weight: 700;
  vertical-align: middle;
  color: #fff;
}

.shop_head .cnt_body .sales_box span .light {
  font-size: 0;
  margin: 0 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #00deff;
  display: inline-block;
}

.shop_head .cnt_body .sales_time {
  display: flex;
  align-items: baseline;
  margin-top: 6px;
}

.shop_head .cnt_body .sales_time .time_box {
  width: 9.5px;
  height: 9.5px;
  margin-right: 3px;
}

.shop_head .cnt_body .sales_time .time_limit {
  font-size: 10px;
  color: #fff;
}

.shop_head .cnt_body .sales_time .time {
  position: relative;
  font-size: 10px;
  color: #fff;
  margin-left: 8px;
}

.shop_head .cnt_body .sales_time .time::before {
  position: absolute;
  content: '';
  width: 1px;
  height: 10px;
  background-color: #fff;
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
}

.shop_body {
  background-color: #fff;
  border-radius: 22.5px 22.5px 0 0;
}

.shop_body_body {
  padding: 0 20px 17px;
}

.shop_body_head {
  padding: 20px 17px 13px;
}

.tag_list {
  overflow-y: hidden;
  width: 100%;
  white-space: nowrap;
  font-size: 0;
}

.tag_list li {
  display: inline-block;
  margin-right: 9px;
  padding: 14px 12px;
  border-radius: 12.5px;
  background-color: #f1f1f4;
  font-size: 15px;
  font-weight: 500;
  color: #292929;
}

.tag_list li:last-of-type {
  margin-right: 0;
}

.tag_list li.active {
  background-color: #343434;
  color: #fff;
}

.txt_area {
  font-size: 0;
}

.shop_body_body_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.all_product {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #292929;
  margin-right: 9px;
}

.all_product span {
  color: #0f8385;
  font-weight: 700;
}

.sales_category {
  position: relative;
  margin-left: 9px;
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #292929;
}

.sales_category::before {
  position: absolute;
  content: '';
  left: -10px;
  width: 1px;
  height: 12.5px;
  background-color: #292929;
}

.sales_category .down_btn {
  width: 9px;
  height: 12px;
}

.sales_category_list {
}

.grid_area,
.column_area {
  display: inline-block;
  text-align: center;
  width: 29px;
  height: 29px;
  border-radius: 5px;
}

.grid_area {
  background-color: #fff;
}

.grid_area.is_active {
  background-color: #949494;
}

.btn.grid {
  margin: 6px auto;
  width: 17px;
  height: 17px;
}

.btn.column {
  margin: 6px auto;
  width: 18px;
  height: 18px;
}

.column_area {
  background-color: #fff;
}

.column_area.is_active {
  background-color: #949494;
}

.shop_body_body_body {
  padding: 25px 10px 0;
}

.col.col_6 {
  margin-bottom: 12px;
}


.thumb_area {
  position: relative;
  display: block;
}

.thumb {
  display: block;
  width: 100%;
}

.thumb_area + .txt_area {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.thumb_area + .txt_area span {
  font-size: 18px;
  color: #0f8385;
}

.thumb_area + .txt_area p + p {
  margin-top: 10px;
}

.column_txt_area {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.column_txt_area span {
  font-size: 18px;
  color: #0f8385;
}

.column_txt_area p + p {
  margin-top: 10px;
}

/*.cart_btn_area {*/
/*  position: absolute;*/
/*  bottom: 5px;*/
/*  right: 5px;*/
/*  width: 35px;*/
/*  height: 35px;*/
/*  text-align: center;*/
/*  background: #fff;*/
/*  border-radius: 12px;*/
/*}*/

.col.col_6 {
  position: relative;
}

.col.col_6:focus {
  background-color: rgba(254, 0 , 0 , 0.1);
}

.col.col_6 .txt_area {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.col.col_6 .txt_area span {
  font-size: 18px;
  color: #0f8385;
}

.col.col_6 .txt_area p + p {
  margin-top: 10px;
}


.cart_btn_area {
  position: absolute;
  bottom: 65px;
  right: 10px;
  width: 35px;
  height: 35px;
  text-align: center;
  background: #fff;
  border-radius: 12px;
}

.cart_btn {
  display: inline-block;
  width: 16px;
  height: 18px;
  margin: 8px 0;
}

.grid.grid_5.is_list {
  margin: 0;
}

.grid.grid_5.is_list .col.col_6 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0;
  margin-bottom: 0;
}

.grid.grid_5.is_list .col.col_6 .thumb_area {
  display: inline-block;
  width: 95px;
  height: 95px;
}

.grid.grid_5.is_list .col.col_6 .thumb_area .thumb {
  height: 100%;
}

.grid.grid_5.is_list .col.col_6 .thumb_area img {
  width: 100%;
  height: 100%;
}

.grid.grid_5.is_list .col.col_6 .txt_area  {
  display: inline-block;
  margin-top: 0;
  vertical-align: middle;
}

.grid.grid_5.is_list .col.col_6 + .col.col_6 {
  margin-top: 20px;
}

.grid.grid_5.is_list .col.col_6 .cart_btn_area {
  display: inline-block;
  position: static;
  width: 35px;
  height: 35px;
  text-align: center;
  background: #f1f1f4;
  border-radius: 12px;
}

</style>