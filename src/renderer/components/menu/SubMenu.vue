<template>
    <div class="sub-menu">
        <button class="sub-menu__button mdc-button mdc-drawer__subtitle" @click="onClick">
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">More</span>
            <i class="material-icons mdc-button__icon" aria-hidden="true">arrow_drop_{{isOpen ? 'up':'down'}}</i>
        </button>
        <div class="mdc-menu-surface--anchor">
            <div :class="['mdc-menu', 'mdc-menu-surface', isOpen ? 'mdc-menu-surface--open' : '']">
            <ul class="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabindex="-1">
                <li class="mdc-list-item" role="menuitem">
                    <span class="mdc-list-item__text">Profile</span>
                </li>
                <li class="mdc-list-item" role="menuitem">
                    <span class="mdc-list-item__text">Logout</span>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SubMenu',
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      onClick () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped>
.sub-menu__button {
    height: 28px;
    display: inline-flex;
    padding: 0;
}
</style>