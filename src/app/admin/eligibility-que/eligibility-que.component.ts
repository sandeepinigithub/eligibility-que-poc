import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eligibility-que',
  templateUrl: './eligibility-que.component.html',
  styleUrls: ['./eligibility-que.component.scss'],
  standalone: false
})
export class EligibilityQueComponent implements OnInit {
  questionnaireForm!: FormGroup;
  questions: any[] = [];
  survey: any

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadSurveyFromApi();
  }

  loadSurveyFromApi(): void {
    const apiResponse = {
      // "result": {
      //   "id": 5,
      //   "surveyType": "General",
      //   "title": "LeadSuitability",
      //   "description": "Survey to find out Ticket Holder if eligible to work",
      //   "isActive": true,
      //   "questions": [
      //     {
      //       "id": 10,
      //       "text": "Our company is here to coach and assist you with exploring employment opportunities while helping you manage your benefits. Are you interested in learning more?",
      //       "section": null,
      //       "type": "SingleSelection",
      //       "surveyId": 5,
      //       "isMandatory": false,
      //       "placeHolder": null,
      //       "options": [
      //         {
      //           "id": 1,
      //           "text": "Yes",
      //           "questionId": 10,
      //           "isRequiresExplanation": false
      //         },
      //         {
      //           "id": 2,
      //           "text": "No",
      //           "questionId": 10,
      //           "isRequiresExplanation": false
      //         }
      //       ],
      //       "response": null
      //     },
      //     {
      //       "id": 11,
      //       "text": "Are you able to work at this time?",
      //       "section": null,
      //       "type": "SingleSelection",
      //       "surveyId": 5,
      //       "isMandatory": false,
      //       "placeHolder": null,
      //       "options": [
      //         {
      //           "id": 3,
      //           "text": "Yes",
      //           "questionId": 11,
      //           "isRequiresExplanation": false
      //         },
      //         {
      //           "id": 4,
      //           "text": "No",
      //           "questionId": 11,
      //           "isRequiresExplanation": false
      //         }
      //       ],
      //       "response": null
      //     },
      //     {
      //       "id": 12,
      //       "text": "Would you like to work with our career coach to help you achieve your goals?",
      //       "section": null,
      //       "type": "SingleSelection",
      //       "surveyId": 5,
      //       "isMandatory": false,
      //       "placeHolder": null,
      //       "options": [
      //         {
      //           "id": 5,
      //           "text": "Yes",
      //           "questionId": 12,
      //           "isRequiresExplanation": false
      //         },
      //         {
      //           "id": 6,
      //           "text": "No",
      //           "questionId": 12,
      //           "isRequiresExplanation": false
      //         }
      //       ],
      //       "response": null
      //     },
      //     {
      //       "id": 13,
      //       "text": "What is your current employment status?",
      //       "section": null,
      //       "type": "SingleSelection",
      //       "surveyId": 5,
      //       "isMandatory": false,
      //       "placeHolder": null,
      //       "options": [
      //         {
      //           "id": 7,
      //           "text": "Not working but interested",
      //           "questionId": 13,
      //           "isRequiresExplanation": false
      //         },
      //         {
      //           "id": 8,
      //           "text": "Working but looking",
      //           "questionId": 13,
      //           "isRequiresExplanation": false
      //         },
      //         {
      //           "id": 9,
      //           "text": "Working and satisfied",
      //           "questionId": 13,
      //           "isRequiresExplanation": false
      //         }
      //       ],
      //       "response": null
      //     },
      //     {
      //       "id": 14,
      //       "text": "What type of work are you interested in pursuing?",
      //       "section": null,
      //       "type": "TextInput",
      //       "surveyId": 5,
      //       "isMandatory": false,
      //       "placeHolder": null,
      //       "options": [],
      //       "response": null
      //     },
      //     {
      //       "id": 75,
      //       "text": "What type of career are you interested ?",
      //       "section": null,
      //       "type": "MultipleSelection",
      //       "surveyId": 5,
      //       "isMandatory": false,
      //       "placeHolder": null,
      //       "options": [
      //         {
      //           "id": 118,
      //           "text": "Technical",
      //           "questionId": 75,
      //           "isRequiresExplanation": false
      //         },
      //         {
      //           "id": 120,
      //           "text": "Management",
      //           "questionId": 75,
      //           "isRequiresExplanation": false
      //         }
      //       ],
      //       "response": null
      //     }
      //   ]
      // },

      "result": {
        "id": 5,
        "surveyType": "General",
        "title": "LeadSuitability",
        "description": "Survey to find out Ticket Holder if eligible to work",
        "isActive": true,
        "questions": [
          {
            "id": 10,
            "text": "Our company is here to coach and assist you with exploring employment opportunities while helping you manage your benefits. Are you interested in learning more?",
            "section": null,
            "type": "SingleSelection",
            "surveyId": 5,
            "isMandatory": false,
            "placeHolder": null,
            "options": [
              {
                "id": 1,
                "text": "Yes",
                "questionId": 10,
                "isRequiresExplanation": false
              },
              {
                "id": 2,
                "text": "No",
                "questionId": 10,
                "isRequiresExplanation": false
              }
            ],
            "response": {
              "selectedOptionId": 1,
              "textAnswer": "I am Sandeep"
            }
          },
          {
            "id": 11,
            "text": "Are you able to work at this time?",
            "section": null,
            "type": "SingleSelection",
            "surveyId": 5,
            "isMandatory": false,
            "placeHolder": null,
            "options": [
              {
                "id": 3,
                "text": "Yes",
                "questionId": 11,
                "isRequiresExplanation": false
              },
              {
                "id": 4,
                "text": "No",
                "questionId": 11,
                "isRequiresExplanation": false
              }
            ],
            "response": {
              "selectedOptionId": 3,
              "textAnswer": "Yes"
            }
          },
          {
            "id": 12,
            "text": "Would you like to work with our career coach to help you achieve your goals?",
            "section": null,
            "type": "SingleSelection",
            "surveyId": 5,
            "isMandatory": false,
            "placeHolder": null,
            "options": [
              {
                "id": 5,
                "text": "Yes",
                "questionId": 12,
                "isRequiresExplanation": false
              },
              {
                "id": 6,
                "text": "No",
                "questionId": 12,
                "isRequiresExplanation": false
              }
            ],
            "response": {
              "selectedOptionId": 6,
              "textAnswer": "Yes"
            }
          },
          {
            "id": 13,
            "text": "What is your current employment status?",
            "section": null,
            "type": "SingleSelection",
            "surveyId": 5,
            "isMandatory": false,
            "placeHolder": null,
            "options": [
              {
                "id": 7,
                "text": "Not working but interested",
                "questionId": 13,
                "isRequiresExplanation": false
              },
              {
                "id": 8,
                "text": "Working but looking",
                "questionId": 13,
                "isRequiresExplanation": false
              },
              {
                "id": 9,
                "text": "Working and satisfied",
                "questionId": 13,
                "isRequiresExplanation": false
              }
            ],
            "response": {
              "selectedOptionId": 8,
              "textAnswer": "Yes"
            }
          },
          {
            "id": 14,
            "text": "What type of work are you interested in pursuing?",
            "section": null,
            "type": "TextInput",
            "surveyId": 5,
            "isMandatory": false,
            "placeHolder": null,
            "options": [],
            "response": {
              "selectedOptionId": null,
              "textAnswer": "Hello , I am text demo"
            }
          },
          {
            "id": 75,
            "text": "What type of career are you interested ?",
            "section": null,
            "type": "MultipleSelection",
            "surveyId": 5,
            "isMandatory": false,
            "placeHolder": null,
            "options": [
              {
                "id": 118,
                "text": "Technical",
                "questionId": 75,
                "isRequiresExplanation": true
              },
              {
                "id": 120,
                "text": "Management",
                "questionId": 75,
                "isRequiresExplanation": false
              }
            ],
            "response": {
              "selectedOptionId": 118,
              "textAnswer": "Hello Multiple Choice Ans"
            }
          }
        ]
      },
    };

    this.questions = apiResponse.result.questions.map(q => ({
      id: `q${q.id}`,
      question: q.text,
      type:
        q.type === 'TextInput'
          ? 'text'
          : q.type === 'SingleSelection'
            ? 'radio'
            : q.type === 'MultipleSelection'
              ? 'checkbox'
              : '',
      required: q.isMandatory,
      options:
        q.options?.map((opt: any) => ({
          label: opt.text,
          value: `${opt.id}`,
          isDescRequired: opt.isRequiresExplanation
        })) || [],
      response: q.response
    }));

    this.formInitialization();
    this.patchFromApiResponse();
  }

  formInitialization(): void {
    const group: Record<string, any> = {};

    this.questions.forEach(q => {
      if (q.type === 'text' || q.type === 'radio') {
        group[q.id] = ['', q.required ? Validators.required : []];

        if (q.type === 'radio' && q.options.some((opt: any) => opt.isDescRequired)) {
          group[`${q.id}_desc`] = ['', []]; // Optional, conditionally shown
        }
      } else if (q.type === 'checkbox') {
        const checkboxGroup: Record<string, any> = {};
        q.options.forEach((opt: any) => {
          checkboxGroup[opt.value] = [false];
          if (opt.isDescRequired) {
            checkboxGroup[`${opt.value}_desc`] = ['', []];
          }
        });
        group[q.id] = this.fb.group(checkboxGroup);
      }
    });

    this.questionnaireForm = this.fb.group(group);
  }

  isRadioDescRequired(q: any): boolean {
    const selected = this.questionnaireForm.get(q.id)?.value;
    return (
      q.options?.some(
        (opt: any) => opt.isDescRequired && opt.value === selected
      ) ?? false
    );
  }

  isCheckboxDescRequired(q: any, value: string): boolean {
    const group = this.questionnaireForm.get(q.id);
    const selected = group?.get(value)?.value;
    const option = q.options?.find(
      (opt: any) => opt.value === value && opt.isDescRequired
    );
    return selected && !!option;
  }

  isInvalid(controlName: string, groupName?: string): boolean {
    const control = groupName
      ? (this.questionnaireForm.get(groupName) as FormGroup)?.get(controlName)
      : this.questionnaireForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  submit(): void {
    if (this.questionnaireForm.valid) {
      console.log('Submitted:', this.questionnaireForm.value);
    } else {
      this.questionnaireForm.markAllAsTouched();
    }
  }

  patchFromApiResponse(): void {
    const patchData: Record<string, any> = {};

    this.questions.forEach(q => {
      const res = q.response;

      if (q.type === 'text') {
        patchData[q.id] = res?.textAnswer || '';
      } else if (q.type === 'radio') {
        patchData[q.id] = res?.selectedOptionId?.toString() || '';

        const selectedOption = q.options?.find(
          (opt: any) =>
            opt.isDescRequired && `${opt.value}` === res?.selectedOptionId?.toString()
        );
        if (selectedOption) {
          patchData[`${q.id}_desc`] = res?.textAnswer || '';
        }
      } else if (q.type === 'checkbox') {
        const groupPatch: Record<string, any> = {};

        q.options.forEach((option: any) => {
          if (option?.value) {
            groupPatch[option?.value] = true;

            if (option.isDescRequired) {
              const checkboxGroup = this.questionnaireForm.get(q.id) as FormGroup;
              checkboxGroup.get(`${option?.value}_desc`)?.setValue("Hello Sandeep")
            }
          }
        });

        // For unselected options, default to false
        q.options.forEach((opt: any) => {
          if (!(opt.value in groupPatch)) {
            groupPatch[opt.value] = false;
          }
        });

        patchData[q.id] = groupPatch;
      }
    });

    this.patchResponses(patchData);
  }


  patchResponses(data: Partial<Record<string, any>>): void {
    this.questionnaireForm.patchValue(data);
  }


  submitSurvey(): void {
    const responseDetails: any[] = [];

    this.questions.forEach((question: any) => {
      // const controlName = 'q' + question.id;
      const controlName = question.id;
      const value = this.questionnaireForm.get(controlName)?.value;

      let detail: any = {
        questionId: +question.id?.replace(/^q/, ''),
        textAnswer: null,
        selectedOptions: []
      };
      if (question.type === 'text') {
        detail.textAnswer = value;
      } else if (question.type === 'radio') {
        const isDescRequired  = question.options.some((op:any) => op.isDescRequired == true)
        if (value) {
          detail.selectedOptions.push({
            surveyQuestionOptionId: +value,
            textAnswer: isDescRequired ? this.questionnaireForm.get(controlName+ '_desc')?.value : null
          });
        }
      } else if (question.type === 'checkbox' && value && typeof value === 'object') {
        debugger
        Object.entries(value).forEach(([optionId, isCheckedOrText]) => {
          if (isCheckedOrText && typeof(isCheckedOrText) == 'boolean') {
            detail.selectedOptions.push({
              surveyQuestionOptionId: +optionId,
              textAnswer: value[`${optionId}_desc`] != undefined && value[`${optionId}_desc`] != null ? value[`${optionId}_desc`] : null
            });
          }
        });
      }

      responseDetails.push(detail);
    });

    const payload = {
      id: 0,
      surveyId: 1,
      clientId: 'CLT-1-000-000-01', // replace with actual client ID if available
      responseDetails
    };

    console.log('Payload to API:', payload);

    // Send payload to API
    // this.http.post('your-api-endpoint', payload).subscribe(...)
  }

}
