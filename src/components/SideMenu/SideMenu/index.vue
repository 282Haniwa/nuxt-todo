<template>
  <div class="side-menu-root">
    <div class="logo-wrapper">
      <SvgImage class="logo" name="logo/logo" />
    </div>

    <MenuItem
      :class="{ 'menu-item': true, selected: selected === 'All' }"
      :disable="edit"
      value="All"
      @click="handleSelect"
    />
    <MenuItem
      :class="{ 'menu-item': true, selected: selected === 'Favorites' }"
      :disable="true"
      value="Favorites"
      @click="handleSelect"
    />

    <div class="label-text-wrapper">
      <span class="label-text">Categories</span>
    </div>

    <MenuItem
      v-for="(category, index) in categories"
      :key="category.id"
      :class="{ 'menu-item': true, selected: selected === category.name }"
      :disable="edit"
      :edit="edit"
      :value="category.name"
      @change="(value) => handleChangeCategory(index, value)"
      @click="handleSelect"
      @delete="handleDeleteCategory(index)"
    />

    <Button
      v-if="!edit"
      class="button"
      icon="icon/edit"
      variant="main"
      style="background-color: rgba(166, 57, 75, 0.3);"
      @click="handleClickEditButton"
      >Edit Categories</Button
    >
    <Button v-if="edit" class="button" variant="white" @click="handleClickAddButton"
      >Add Category</Button
    >
    <Button v-if="edit" class="button" variant="lime" @click="handleClickSaveButton"
      >Save Categories</Button
    >
  </div>
</template>

<script>
import MenuItem from '../MenuItem';
import Button from '~/components/Buttons/Button';
import SvgImage from '~/components/SvgImage';

export default {
  name: 'SideMenu',
  components: {
    MenuItem,
    Button,
    SvgImage,
  },
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      nextCategories: this.categories,
      edit: false,
    };
  },
  methods: {
    handleChangeCategory(index, value) {
      this.nextCategories.splice(index, 1, value);
    },
    handleDeleteCategory(index) {
      this.nextCategories.splice(index, 1);
    },
    handleSelect(category) {
      this.$emit('change', category);
    },
    handleClickEditButton() {
      this.edit = true;
    },
    handleClickAddButton() {
      this.nextCategories.push('');
    },
    handleClickSaveButton() {
      const categories = this.nextCategories.filter((category, index, self) => {
        return category !== '' && self.indexOf(category) === index;
      });
      this.edit = false;
      this.nextCategories = categories;
      this.$emit('edit', categories);
    },
  },
};
</script>

<style lang="scss" scoped>
$color-inactive: rgba(255, 255, 254, 0.54);

.side-menu-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 290px;
  background-color: $color-main;
}

.logo-wrapper {
  position: relative;
  height: 120px;
  width: 100%;
}

.logo {
  position: absolute;
  top: 32px;
  left: 39px;
}

.label-text-wrapper {
  width: 90%;
  padding: 0 12px;
  margin-top: 24px;
  margin-bottom: 8px;
}

.label-text {
  position: relative;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.05em;
  color: $color-paper;
  border-bottom: 2px solid rgba(255, 255, 254, 0.85);
  padding: 2px 4px 2px 2px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    height: 6px;
    width: 2px;
    background-color: rgba(255, 255, 254, 0.85);
  }
}

.menu-item {
  color: $color-inactive;

  &.selected {
    color: $color-paper;
  }
}

.button {
  width: 200px;
  margin-top: 12px;
}
</style>
