<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200 flex items-start justify-center py-10">
    <div class="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-3xl">
      <h2 class="text-5xl font-extrabold text-center text-gray-800 mb-8 font-serif">
        📝 <i>Hng Notes</i>
      </h2>

      <form @submit.prevent="addNote" class="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          v-model="newTitle"
          placeholder="📌 Note Title"
          required
          class="flex-1 p-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all font-serif"
        />
        <input
          v-model="newContent"
          placeholder="✨ Note Content"
          required
          class="flex-1 p-3 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition-all font-serif"
        />
        <button
          type="submit"
          class="bg-sky-500 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg font-serif"
        >
          Add Note
        </button>
      </form>

      <input
        v-model="searchQuery"
        placeholder="🔍 Search notes by title..."
        class="w-full p-3 mb-6 border border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition-all font-serif"
      />

      <TransitionGroup name="list" tag="ul" class="space-y-5 relative">
        <NoteItem
          v-for="note in filteredNotes"
          :key="note.id"
          :note="note"
          @update-note="updateNote"
          @delete-note="deleteNote"
        />
      </TransitionGroup>

      <div v-if="notes.length > 0 && filteredNotes.length === 0" class="text-center mt-6">
        <p class="text-gray-500 text-lg">
          No notes found with that title.
        </p>
      </div>

      <div v-if="notes.length === 0" class="text-center mt-6">
        <p class="text-gray-500 text-lg">
          You haven't added any notes yet.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import api from "../services/api.js";
import NoteItem from './NoteItem.vue'; // <-- Import the new component

export default {
  components: {
    NoteItem, // <-- Register the new component
  },
  data() {
    return {
      notes: [],
      newTitle: "",
      newContent: "",
      searchQuery: "",
    };
  },
  async created() {
    this.fetchNotes();
  },
  computed: {
    filteredNotes() {
      if (!this.searchQuery) {
        return this.notes;
      }
      const query = this.searchQuery.toLowerCase();
      return this.notes.filter(note =>
        note.title.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    async fetchNotes() {
      try {
        const res = await api.get("/notes");
        this.notes = res.data;
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    },
    async addNote() {
      if (!this.newTitle || !this.newContent) return;
      try {
        const res = await api.post("/notes", {
          title: this.newTitle,
          content: this.newContent,
        });
        this.notes.unshift(res.data);
        this.newTitle = "";
        this.newContent = "";
      } catch (error) {
        console.error("Error adding note:", error);
      }
    },
    // The update and delete logic now receives events from NoteItem
    async updateNote(updatedNote) {
      try {
        const res = await api.put(`/notes/${updatedNote.id}`, updatedNote);
        const index = this.notes.findIndex((note) => note.id === updatedNote.id);
        if (index !== -1) {
          this.notes[index] = res.data;
        }
      } catch (error) {
        console.error("Error updating note:", error);
      }
    },
    async deleteNote(id) {
      try {
        await api.delete(`/notes/${id}`);
        this.notes = this.notes.filter((note) => note.id !== id);
      } catch (error) {
        console.error("Error deleting note:", error);
      }
    },
  },
};
</script>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-active {
  position: absolute;
}
</style>





