import {Injectable} from '@angular/core';
import {LabelRepositoryService} from "@app/core/service/repository/label-repository.service";
import {Label} from "@app/core/model/label";
import {Observable} from "rxjs/index";

@Injectable()
export class LabelService {

  constructor(private labelRepository: LabelRepositoryService) {
  }

  save(label: Label): Label {
    return this.labelRepository.save(label);
  }

  getLabels(): Observable<Label[]> {
    return this.labelRepository.findAllLabels();
  }
}
