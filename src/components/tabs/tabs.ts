import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class VBTabs extends Vue {
    @Prop()
    value: number;

    @Prop()
    items: string[] | {[index: string]: any};
}