function App() {
    return {
        open: true,
        openClose: false,
        isChecked() {
            const filter = this.$refs.filter
            const isChecked = filter.querySelectorAll('input:checked').length > 0
            // const isChecked = $(filter).find('input[type="checkbox"]').is(':checked')
            this.openClose = isChecked
        },
        clearChecked() {
            const filter = this.$refs.filter
            $(filter).find('input[type="checkbox"]').prop('checked', false)
            this.openClose = false

        }

    
    
    }

}
