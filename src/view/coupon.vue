<template>
  <div>
    <div class="coupon_wrap">
      <div class="coupon_head">
        <h2 class="ttl">쿠폰받기</h2>
        <img src="@/assets/img/ic_close.png" alt="">
      </div>
      <div class="coupon_body">
        <div class="use_coupon_wrap">
          <h3>최대 혜택 쿠폰</h3>
          <div class="coupon_area">
            <div class="txt_area">
              <div class="scroll">
                <p class="discount"><em>100,000원</em> 할인</p>
                <p class="category">일룸 주방가전 특가</p>
                <p class="condition">10만원 이상 결제 시 최대 50만원 사용 가능</p>
                <p class="date">발급일로부터 7일간 유효</p>
              </div>
            </div>
            <div class="btn_area">
              <img src="@/assets/img/ic_download.png" alt="">
            </div>
          </div>
        </div>
        <div class="use_coupon_wrap">
          <h3>이 상품에 적용 가능한 다른 쿠폰</h3>
          <div class="coupon_area">
            <div class="txt_area">
              <p class="discount"><em>20%</em> 할인</p>
              <p class="category">지인몰 봄맞이 가구 대축제</p>
              <p class="condition">10만원 이상 결제 시 최대 50만원 사용 가능</p>
              <p class="date">2021.06.01 ~ 2021.06.30</p>
            </div>
            <div class="btn_area">
              <img src="@/assets/img/ic_download.png" alt="">
            </div>
          </div>
          <div class="coupon_area">
            <div class="txt_area">
              <p class="discount"><em>5%</em> 할인</p>
              <p class="category">지인몰 첫 구매 혜택</p>
              <p class="condition">지인몰 첫 구매 시 최대 5만원 사용 가능</p>
              <p class="date">발급일로부터 7일간 유효</p>
            </div>
            <div class="btn_area">
              <img src="@/assets/img/ic_download.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="coupon_foot">
        <div class="coupon_info">
          <ul>
            <li>쿠폰 사용 시 최소금액과 최대 할인금액을 꼭 확인하시기 바랍니다.</li>
            <li>받은 쿠폰은 마이 페이지와 주문/결제 페이지에서 확인 가능합니다.</li>
          </ul>
        </div>
        <div class="btn_area">
          <button class="btn">쿠폰 모두 받기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coupon"
}
</script>

<style scoped>

.coupon_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;
  border-bottom: 1px solid #E2E2E2;
}

.coupon_head .ttl {
  font-size: 16px;
  font-weight: 400;
  color: #212121;
}

.coupon_head img {
  width: 26px;
  height: 26px;
}

.coupon_body {
  padding: 20px;
}

.coupon_body .use_coupon_wrap h3 {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #212121;
}

.coupon_body .use_coupon_wrap + .use_coupon_wrap {
  margin-top: 30px;
}

.coupon_body .use_coupon_wrap .coupon_area + .coupon_area {
  margin-top: 10px;
}

.coupon_area {
  display: table;
  table-layout: fixed;
  width: 100%;
  height: 100%;
  min-height: 110px;
  border: 1px solid #E2E2E2;
}

.coupon_area .txt_area {
  display: table-cell;
  vertical-align: middle;
  width: 81.25%;
  padding: 13px 15px;
  background-color: #fff;
}

.coupon_area .txt_area .scroll {
  padding: 0 20px 0 0;
  white-space: nowrap;
  overflow-y: hidden;
}

.coupon_area .txt_area .discount {
  font-size: 14px;
  font-weight: 400;
  color: #212121;
}

.coupon_area .txt_area .discount em {
  font-size: 20px;
  font-weight: 500;
}

.coupon_area .txt_area .category {
  margin-top: 4px;
  font-size: 13px;
  font-weight: 500;
  color: #212121;
}

.coupon_area .txt_area .condition {
  margin-top: 4px;
  font-size: 11px;
  font-weight: 400;
  color: #7C7C7C;
}

.coupon_area .txt_area .date {
  margin-top: 4px;
  font-size: 11px;
  font-weight: 400;
  color: #7C7C7C;
}

.coupon_area .btn_area {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  padding: 13px 15px;
  width: 18.75%;
  background-color: #B49277;
}

.coupon_area .btn_area img {
  width: 26px;
  height: 26px;
}


.coupon_foot .coupon_info {
  margin: 0 -20px;
  padding: 16px 20px;
  background-color: #F7F7F7;
}

.coupon_foot .coupon_info li {
  position: relative;
  padding-left: 10px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #6C6C6C;
}

.coupon_foot .coupon_info li + li {
  margin-top: 5px;
}

.coupon_foot .coupon_info li::before {
  position: absolute;
  content: '';
  top: 5px;
  left: 0;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #6F7070;
}

.coupon_foot {
  margin-top: 10px;
  padding: 13px 20px;
}

.coupon_foot .btn_area {
  margin-top: 75px;
}

.coupon_foot .btn_area .btn {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  background: linear-gradient(to right, #A07458, #C4A68C);
}

</style>