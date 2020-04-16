<template>
<div class="app-page">
  <div>
    <Loader v-if="loading"/>
    <div v-else-if="record">
     <div class="breadcrumb-wrap-m">
        <router-link to="/history" class="breadcrumb white-text">
          <span class="white-text">
            {{'Menu_History'|localize}}
          </span>
        </router-link>
        <a @click.prevent class="breadcrumb">
          <span class="white-text">
            {{ record.type === 'income' ? 'Income' : 'Outcome' | localize }}
          </span>          
        </a>
      </div>
      <div class="row">
          <div class="col s12 m6">
            <div 
              class="card"
              :class="{
                'outcome': record.type === 'outcome',
                'income': record.type === 'income'
              }"
            >
            <div class="card-content white-text">
              <p>{{'Description'|localize}}: {{record.description}}</p>
              <p>{{'Amount'|localize}}: {{record.amount | currency}}</p>
              <p>{{'Category'|localize}}: {{record.categoryName}}</p>
              <small>{{record.date | date('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center white-text" v-else>Запись с id={{$route.params.id}} не найдена</p>
  </div>
</div>
</template>  

<script>
export default {
  name: 'detail',
  metaInfo() {
    return {
      title: this.$title('Detail_Title')
    }
  },
  data: () => ({
    record: null,
    loading: true
  }),
  async mounted() {
    const id = this.$route.params.id
    const record = await this.$store.dispatch('fetchRecordById', id)
    const category = await this.$store.dispatch(
      'fetchCategoryById',
      record.categoryId
    )

    this.record = {
      ...record,
      categoryName: category.title
    }

    this.loading = false
  }
}
</script>
