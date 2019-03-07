import { action, observable, runInAction } from 'mobx';

export class AppStore {
    @observable app: string = '1';
}

export default new AppStore();
