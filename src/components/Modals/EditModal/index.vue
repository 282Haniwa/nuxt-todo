<template>
  <ModalBase
    class="edit-modal-root"
    position="right"
    :open="open"
    @open="handleOpen"
    @close="handleCancel"
  >
    <div class="edit-modal">
      <div class="header">
        <div class="header-text">{{ title }}</div>
        <IconButton
          height="32px"
          width="32px"
          class="close-button"
          icon="icon/close"
          @click="handleCancel"
        />
      </div>
      <div class="content">
        <div v-show="!hideIconMenu" class="icon-menu">
          <IconToggleButton
            class="icon-button"
            icon="icon/favorite"
            active-color="#ffdf6f"
            :value="editTodo.favorite"
            @click="handleClickFavorite"
          />
          <IconButton class="icon-button" icon="icon/delete" @click="handleClickDelete" />
        </div>
        <TextField v-model="editTodo.title" class="input" label="Title" />
        <SelectBox v-model="editTodo.category" class="input" label="Category">
          <option v-for="category in categories" :key="category" :value="category">{{
            category
          }}</option>
        </SelectBox>
        <DatePicker v-model="editTodo.limit" class="input" label="Limit" type="date" />
        <TextArea v-model="editTodo.detail" class="input detail-input" label="Detail" />
      </div>
      <div class="footer">
        <div class="button-wrapper">
          <Button class="button" variant="outline" @click="handleCancel">{{ cancelText }}</Button>
          <Button class="button" variant="main" :disabled="actionDisabled" @click="handleAction">{{
            actionText
          }}</Button>
        </div>
      </div>
    </div>
  </ModalBase>
</template>

<script>
import ModalBase from '../ModalBase';
import Button from '~/components/Buttons/Button';
import IconButton from '~/components/Buttons/IconButton';
import IconToggleButton from '~/components/Buttons/IconToggleButton';
import TextField from '~/components/Inputs/TextField';
import TextArea from '~/components/Inputs/TextArea';
import SelectBox from '~/components/Inputs/SelectBox';
import DatePicker from '~/components/Inputs/DatePicker';
import { defaultTodo } from '~/utils/default';

export default {
  name: 'EditModal',
  components: {
    ModalBase,
    Button,
    IconButton,
    IconToggleButton,
    TextField,
    TextArea,
    SelectBox,
    DatePicker,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    actionText: {
      type: String,
      default: '',
    },
    cancelText: {
      type: String,
      default: '',
    },
    actionDisabled: {
      type: Boolean,
      default: false,
    },
    hideIconMenu: {
      type: Boolean,
      default: false,
    },
    categories: {
      type: Array,
      default: () => [],
    },
    todo: {
      type: Object,
      default: () => defaultTodo,
    },
  },
  data() {
    return {
      editTodo: { ...this.todo },
    };
  },
  methods: {
    handleOpen(event) {
      this.editTodo = { ...this.todo };
      this.$emit('open');
    },
    handleClose(reason, event) {
      this.editTodo = { ...defaultTodo };
      this.$emit('close', reason, event);
    },
    handleCancel(event) {
      this.$emit('cancel', event);
      this.handleClose('clickCancelButton', event);
    },
    handleAction(event) {
      this.$emit('action', { ...this.editTodo }, event);
      this.handleClose('clickActionButton', event);
    },
    handleClickFavorite(value, event) {
      this.editTodo.favorite = value;
    },
    handleClickDelete(event) {
      this.$emit('delete', event);
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-modal-root {
}

.edit-modal {
  width: 348px;
}

.header {
  height: 96px;
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 0;
  background-color: #f3f3f3;
}

.close-button {
  color: $color-gray;
}

.header-text {
  padding: 8px 16px;
  font-family: Sawarabi Gothic;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 35px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: $color-text;
}

.content {
  position: relative;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  color: $color-text;
  border-bottom: solid 1px $color-border;
}

.icon-menu {
  position: absolute;
  top: 24px;
  right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}

.icon-button {
  color: $color-gray;
}

.input {
  margin-top: 16px;
}

.detail-input {
  height: 128px;
}

.footer {
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: flex-end;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
}

.button {
  margin-left: 16px;
}
</style>
