import { reactive } from 'vue';

let counter = 1;

export const lodaingContexes = reactive([]);

export function createLoadingContext(title, description, icon) {
  const id = counter;
  counter += 1;
  const prioritize = () => {
    const idx = lodaingContexes.findIndex((e) => e.id === id);
    if (idx > 0) {
      const el = lodaingContexes.splice(idx, 1);
      lodaingContexes.unshift(el);
    }
  };
  const context = reactive({
    id,
    title: title || '',
    description: description || '',
    icon: icon || 'default',
    setTitle(_title) {
      this.title = _title;
      prioritize();
    },
    setDescription(_description) {
      this.description = _description;
      prioritize();
    },
    setIcon(_icon) {
      this.icon = _icon;
      prioritize();
    },
    destroy() {
      const idx = lodaingContexes.findIndex((e) => e.id === id);
      console.log({ idx });
      if (idx > -1) {
        lodaingContexes.splice(idx, 1);
        console.log({ length: lodaingContexes.length });
      }
    },
  });

  lodaingContexes.unshift(context);
  return context;
}
