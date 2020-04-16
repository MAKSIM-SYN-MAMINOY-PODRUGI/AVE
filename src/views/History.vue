<template>
<div class="app-page">
  <div>
    <div class="page-title">
      <h3>{{'History_Title'|localize}}</h3>
    </div>
    <div class="history-chart">
      <canvas ref="canvas"></canvas>
    </div>
    <Loader v-if="loading" />

    <p class="center" v-else-if="!records.length">
      {{'NoRecords'|localize}}.
      <router-link to="/record">{{'AddFirst'|localize}}</router-link>
    </p>

    <section v-else class="card dark-grey table">
      <HistoryTable :records='items'/>
      <Paginate 
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"

        :prev-text="'Back' | localize"
        :prev-link-class="'white-text'"

        :next-text="'Forward' | localize"
        :next-link-class="'white-text'"

        :container-class="'pagination  center'"
        :page-class="'waves-effect'"
      />
    </section>
  </div>
</div>
</template>  

<script>
import paginationMixin from '@/mixins/pagination.mixin'
import HistoryTable from '@/components/HistoryTable'
import { Pie } from 'vue-chartjs'
import localizeFilter from '@/filters/localize.filter'

export default {
  name: 'history',
  metaInfo() {
    return {
      title: this.$title('Menu_History')
    }
  },
  extends: Pie,
  mixins: [paginationMixin],
  data: () => ({
    loading: true,
    records: []
  }),
  async mounted() {
    this.records = await this.$store.dispatch('fetchRecords')
    const categoires = await this.$store.dispatch('fetchCategories')

    this.setup(categoires)

    this.loading = false
  },
  methods: {
    setup(categoires) {
      this.setupPagination(
        this.records.map(record => {
          return {
            ...record,
            categoryName: categoires.find(c => c.id === record.categoryId)
              .title,
            typeClass: record.type === 'income' ? 'income' : 'outcome',
            typeText:
              record.type === 'income'
                ? localizeFilter('Income')
                : localizeFilter('Outcome')
          }
        })
      )

      this.renderChart({
        labels: categoires.map(c => c.title),
        datasets: [
          {
            label: localizeFilter('CostsForCategories'),
            data: categoires.map(c => {
              return this.records.reduce((total, r) => {
                if (r.categoryId === c.id && r.type === 'outcome') {
                  total += +r.amount
                }
                return total
              }, 0)
            }),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(32, 178, 170, 0.2)',
              'rgba(253, 245, 230, 0.2)',
              'rgba(128, 0, 0, 0.2)',
              'rgba(218, 165, 32, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(32, 178, 170, 1)',
              'rgba(253, 245, 230, 1)',
              'rgba(128, 0, 0, 1)',
              'rgba(218, 165, 32, 1)'
          ],
            borderWidth: 1
          }
        ]
      })
    }
  },
  components: {
    HistoryTable
  }
}
</script>

<style>
.history-chart {
  padding: 35px;
  margin-top: 10px;
  margin-bottom: 22.5px;
 
}
</style>
