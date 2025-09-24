<template>
  <li
    class="bg-gradient-to-r from-white via-blue-50 to-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row md:justify-between md:items-center gap-4 transition-all border border-gray-300"
  >
    <div
      class="w-[70%] text-gray-700 break-words min-w-0"
      :class="{'border-2 rounded-xl p-4 border-yellow-400': isEditing}"
    >
      <strong
        ref="titleRef"
        class="text-xl font-bold block mb-1 text-gray-800 focus:outline-none text-justify font-serif"
        :contenteditable="isEditing"
        @input="editedTitle = $event.target.innerText"
      ></strong>

      <p
        ref="contentRef"
        class="text-gray-600 focus:outline-none text-justify font-serif"
        :contenteditable="isEditing"
        @input="editedContent = $event.target.innerText"
      ></p>
    </div>

    <div class="flex gap-3">
      <template v-if="!isEditing">
        <button
          @click="startEditing"
          class="bg-lime-500 text-white font-medium px-4 py-2 rounded-xl hover:bg-yellow-500 transition-colors shadow-sm hover:shadow-md font-serif"
        >
          Edit
        </button>
        <button
          @click="deleteNote"
          class="bg-red-500 text-white font-medium px-4 py-2 rounded-xl hover:bg-red-600 transition-colors shadow-sm hover:shadow-md font-serif"
        >
          Delete
        </button>
      </template>

      <template v-else>
        <button
          @click="saveNote"
          class="bg-emerald-500 text-white font-medium px-4 py-2 rounded-xl hover:bg-green-600 transition-colors shadow-sm hover:shadow-md font-serif"
        >
          Save
        </button>
        <button
          @click="cancelEditing"
          class="bg-gray-500 text-white font-medium px-4 py-2 rounded-xl hover:bg-gray-500 transition-colors shadow-sm hover:shadow-md font-serif"
        >
          Cancel
        </button>
      </template>
    </div>
  </li>
</template>

<script>
export default {
  props: ['note'],
  data() {
    return {
      isEditing: false,
      editedTitle: this.note.title,
      editedContent: this.note.content
    };
  },
  mounted() {
    // Set initial DOM text directly
    this.$refs.titleRef.innerText = this.editedTitle;
    this.$refs.contentRef.innerText = this.editedContent;
  },
  methods: {
    startEditing() {
      this.isEditing = true;
      this.$nextTick(() => {
        this.$refs.titleRef.focus();
      });
    },
    saveNote() {
      this.isEditing = false;
      this.$emit('update-note', {
        id: this.note.id,
        title: this.editedTitle,
        content: this.editedContent
      });
    },
    cancelEditing() {
      this.isEditing = false;
      this.editedTitle = this.note.title;
      this.editedContent = this.note.content;

      // Reset DOM content manually
      this.$refs.titleRef.innerText = this.editedTitle;
      this.$refs.contentRef.innerText = this.editedContent;
    },
    deleteNote() {
      this.$emit('delete-note', this.note.id);
    }
  }
};
</script>


