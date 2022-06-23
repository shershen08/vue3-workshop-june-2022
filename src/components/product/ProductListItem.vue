<template>
     <div class="col-lg-3 col-md-6 mb-4">

            <!--Card-->
            <div class="card">

              <!--Card image-->
              <div class="view overlay">
                <img :src="product.image" class="card-img-top"
                  alt="">
                <a>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <!--Card image-->

              <!--Card content-->
              <div class="card-body text-center">
                <!--Category & Title-->
                <a href="" class="grey-text">
                  <h5>Shirt</h5>
                </a>
                <h5>
                  <strong>
                    <a href="" class="dark-grey-text">{{product.title}}
                      <span class="badge badge-pill danger-color">NEW</span>
                    </a>
                  </strong>
                </h5>

                <h4 class="font-weight-bold blue-text">
                  <strong>{{product.price}}$</strong>
                </h4>

              </div>
              <!--Card content-->

            </div>
            <!--Card-->

          </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>