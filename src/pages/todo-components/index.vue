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

    <span>AlartDialog</span>
    <Button variant="main" @click="handleClickOpenAlartDialog">Open AlartDialog</Button>
    <AlartDialog
      :open="alartDialogOpen"
      title="警告"
      action-text="削除"
      cancel-text="キャンセル"
      @close="handleCloseAlartDialog"
      @action="handleActionAlartDialog"
      @cancel="handleCancelAlartDialog"
      >この操作は取り消し出来ません。カテゴリー「Work」を削除します。カテゴリーに登録されているタスクも全て削除されます</AlartDialog
    >
    <hr width="100%" />

    <span>EditModal</span>
    <Button variant="main" @click="handleClickOpenEditModal">Open EditModal</Button>
    <EditModal
      title="Edit Task"
      action-text="Add"
      cancel-text="Cancel"
      :open="editModalOpen"
      :categories="sideMenuCategories"
      :todo="editModalTodo"
      :hide-icon-menu="false"
      :action-disabled="false"
      @close="handleCloseEditModal"
      @action="handleActionEditModal"
      @cancel="handleCancelEditModal"
      @delete="handleDeleteEditModal"
    />
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
import AlartDialog from '~/components/Modals/AlartDialog';
import EditModal from '~/components/Modals/EditModal';
import SideMenu from '~/components/SideMenu/SideMenu';
import TodoCard from '~/components/Commons/TodoCard';
import { defaultTodo } from '~/utils/default';

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
    AlartDialog,
    EditModal,
    SideMenu,
    TodoCard,
  },
  data() {
    return {
      modalBaseOpen: false,
      modalBasePosition: 'center',
      alartDialogOpen: false,
      editModalOpen: false,
      editModalTodo: {
        title: '高沼カリキュラムを終わらせる',
        category: 'work',
        limit: new Date(2020, 3, 18),
        detail: '',
        checked: true,
        favorite: false,
      },
      sideMenuCategories: ['work', 'お買い物リスト', '買いたい', 'House', 'その他'],
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
    handleClickOpenAlartDialog() {
      this.alartDialogOpen = true;
    },
    handleCloseAlartDialog() {
      this.alartDialogOpen = false;
    },
    handleActionAlartDialog() {
      this.alartDialogOpen = false;
    },
    handleCancelAlartDialog() {
      this.alartDialogOpen = false;
    },
    handleClickOpenEditModal() {
      this.editModalOpen = true;
    },
    handleCloseEditModal() {
      this.editModalOpen = false;
    },
    handleActionEditModal(nextTodo) {
      this.editModalTodo = nextTodo;
    },
    handleCancelEditModal() {},
    handleDeleteEditModal() {
      this.editModalTodo = defaultTodo;
      this.editModalOpen = false;
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
