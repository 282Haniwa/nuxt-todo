<template>
  <div class="container">
    <div>Component list</div>
    <hr width="100%" />

    <span>TextField</span>
    <TextField label="ラベル" />
    <hr width="100%" />

    <span>TextArea</span>
    <TextArea label="ラベル" />
    <hr width="100%" />

    <span>SelectBox</span>
    <SelectBox label="ラベル">
      <option value="aaa">aaa</option>
      <option value="bbb">bbb</option>
      <option value="ccc">ccc</option>
    </SelectBox>
    <hr width="100%" />

    <span>CheckBox</span>
    <CheckBox label="ラベル" />
    <hr width="100%" />

    <span>Button</span>
    <Button variant="main">Button</Button>
    <Button variant="lime">Button</Button>
    <Button variant="white">Button</Button>
    <Button variant="outline">Button</Button>
    <Button icon="icon/edit" variant="main">Button</Button>
    <hr width="100%" />

    <span>IconButton</span>
    <IconButton icon="icon/edit" variant="main" />
    <IconButton icon="icon/edit" variant="lime" />
    <IconButton icon="icon/edit" variant="white" />
    <IconButton icon="icon/edit" variant="outline" />
    <hr width="100%" />

    <span>IconToggleButton</span>
    <IconToggleButton icon="icon/edit" />
    <IconToggleButton icon="icon/edit" :value="true" />
    <IconToggleButton icon="icon/edit" color="blue" active-color="lime" />
    <hr width="100%" />

    <span>ModalBase</span>
    <Button variant="main" @click="handleClickOpenModalBase('center')">Open Modal Center</Button>
    <Button variant="main" @click="handleClickOpenModalBase('top')">Open Modal Top</Button>
    <Button variant="main" @click="handleClickOpenModalBase('right')">Open Modal Right</Button>
    <Button variant="main" @click="handleClickOpenModalBase('bottom')">Open Modal Bottom</Button>
    <Button variant="main" @click="handleClickOpenModalBase('left')">Open Modal Left</Button>
    <ModalBase :position="modalBasePosition" :open="modalBaseOpen" @close="handleCloseModalBase"
      >ModalBase</ModalBase
    >
    <hr width="100%" />

    <span>SideMenu</span>
    <SideMenu
      :categories="sideMenuCategories"
      :selected="sideMenuSelected"
      @change="handleChangeSideMenuSelected"
      @edit="handleEditSideMenuCategories"
    />
    <hr width="100%" />

    <span>TodoCard</span>
    <TodoCard
      :todo="{
        title: '高沼カリキュラムを終わらせる',
        category: 'work',
        limit: new Date(2020, 3, 18),
        detail: 'hoge',
        checked: false,
        favorite: true,
      }"
    />
    <TodoCard
      :todo="{
        title: '高沼カリキュラムを終わらせる',
        category: 'work',
        limit: new Date(2020, 3, 18),
        detail: '',
        checked: true,
        favorite: false,
      }"
    />
    <hr width="100%" />
  </div>
</template>

<script>
import TextField from '~/components/Inputs/TextField';
import TextArea from '~/components/Inputs/TextArea';
import SelectBox from '~/components/Inputs/SelectBox';
import CheckBox from '~/components/Inputs/CheckBox';
import Button from '~/components/Buttons/Button';
import IconButton from '~/components/Buttons/IconButton';
import IconToggleButton from '~/components/Buttons/IconToggleButton';
import ModalBase from '~/components/Modals/ModalBase';
import SideMenu from '~/components/SideMenu/SideMenu';
import TodoCard from '~/components/Commons/TodoCard';

export default {
  components: {
    TextField,
    TextArea,
    SelectBox,
    CheckBox,
    Button,
    IconButton,
    IconToggleButton,
    ModalBase,
    SideMenu,
    TodoCard,
  },
  data() {
    return {
      modalBaseOpen: false,
      modalBasePosition: 'center',
      sideMenuCategories: ['aaaa', 'bbbb', 'cccc', 'dddd'],
      sideMenuSelected: 'All',
    };
  },
  methods: {
    handleClickOpenModalBase(position) {
      this.modalBasePosition = position;
      this.modalBaseOpen = true;
    },
    handleCloseModalBase() {
      this.modalBaseOpen = false;
    },
    handleChangeSideMenuSelected(selected) {
      this.sideMenuSelected = selected;
    },
    handleEditSideMenuCategories(categories) {
      this.sideMenuCategories = categories;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;

  & > * {
    margin-bottom: 32px;
  }
}
</style>
