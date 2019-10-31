<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- <div class="conent">content</div> -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import qs from 'query-string'
import header from 'components/header/header'
import { getSeller } from 'api'
export default {
  data () {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },

  created () {
    this._getSeller()
  },
  methods: {
    _getSeller () {
      getSeller({
        id: this.seller.id
      }).then((seller) => {
        this.seller = Object.assign({}, this.seller, seller)
      })
    }
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
div {
  .tab {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);

    .tab-item {
      flex-grow: 1;
      text-align: center;

      a {
        display: block;
        font-size: 14px;
        color: rgb(77, 85, 93);

        &.active {
          color: rgb(240, 20, 20);
        }
      }
    }
  }
}
</style>
