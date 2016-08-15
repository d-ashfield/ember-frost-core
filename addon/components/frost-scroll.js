import Ember from 'ember'
const {Component, on, run, typeOf} = Ember

const scrollYEndContext = {
  name: 'on-scroll-y-end'
}
const debouncePeriod = 150

export default Component.extend({
  // ==========================================================================
  // Dependencies
  // ==========================================================================

  // ==========================================================================
  // Properties
  // ==========================================================================

  classNames: ['frost-scroll'],

  // ==========================================================================
  // Computed Properties
  // ==========================================================================

  // ==========================================================================
  // Functions
  // ==========================================================================

  // ==========================================================================
  // Events
  // ==========================================================================

  initializeScroll: on('didInsertElement', function () {
    run.scheduleOnce('afterRender', this, () => {
      window.Ps.initialize(this.$()[0])
    })

    if (typeOf(this.attrs['on-scroll-y-end']) === 'function') {
      this.$().on('ps-y-reach-end', () => {
        run.debounce(scrollYEndContext, this.attrs['on-scroll-y-end'], debouncePeriod, true)
      })
    }
  })

  // ==========================================================================
  // Actions
  // ==========================================================================
})