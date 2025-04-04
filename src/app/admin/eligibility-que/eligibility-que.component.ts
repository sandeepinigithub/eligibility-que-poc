import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface QuestionOption {
  label: string;
  value: string;
  isDescRequired?: boolean;
}

interface Question {
  id: string;
  question: string;
  type: 'text' | 'radio' | 'checkbox';
  placeholder?: string;
  options?: QuestionOption[];
}

@Component({
  selector: 'app-eligibility-que',
  templateUrl: './eligibility-que.component.html',
  styleUrls: ['./eligibility-que.component.scss'],
  standalone: false
})
export class EligibilityQueComponent implements OnInit {
  questionnaireForm!: FormGroup;

  questions: Question[] = [
    {
      id: 'q1',
      question: 'What is your name?',
      type: 'text',
      placeholder: 'Enter your name'
    },
    {
      id: 'q2',
      question: 'What is your gender?',
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female', isDescRequired: true },
        { label: 'Other', value: 'other' }
      ]
    },
    {
      id: 'q3',
      question: 'Which hobbies do you enjoy?',
      type: 'checkbox',
      options: [
        { label: 'Reading', value: 'reading' },
        { label: 'Traveling', value: 'traveling', isDescRequired: true },
        { label: 'Cooking', value: 'cooking' },
        { label: 'Sports', value: 'sports', isDescRequired: true },
        { label: 'Music', value: 'music' }
      ]
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInitialization();
  }

  formInitialization(): void {
    const group: Record<string, any> = {};

    this.questions.forEach(q => {
      if (q.type === 'text' || q.type === 'radio') {
        group[q.id] = ['', Validators.required];

        if (q.type === 'radio' && q.options?.some(opt => opt.isDescRequired)) {
          group[`${q.id}_desc`] = [''];
        }
      } else if (q.type === 'checkbox') {
        const checkboxGroup: Record<string, any> = {};
        q.options?.forEach(opt => {
          checkboxGroup[opt.value] = [false];
          if (opt.isDescRequired) {
            checkboxGroup[`${opt.value}_desc`] = [''];
          }
        });
        group[q.id] = this.fb.group(checkboxGroup);
      }
    });

    this.questionnaireForm = this.fb.group(group);
  }

  isRadioDescRequired(q: Question): boolean {
    const selected = this.questionnaireForm.get(q.id)?.value;
    return q.options?.some(opt => opt.isDescRequired && opt.value === selected) ?? false;
  }

  isCheckboxDescRequired(q: Question, value: string): boolean {
    const group = this.questionnaireForm.get(q.id);
    const selected = group?.get(value)?.value;
    const option = q.options?.find(opt => opt.value === value && opt.isDescRequired);
    return selected && !!option;
  }

  isInvalid(controlName: string): boolean {
    const control = this.questionnaireForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  /** Submit responses */
  submit(): void {
    if (this.questionnaireForm.valid) {
      console.log('Submitted:', this.questionnaireForm.value);
    } else {
      this.questionnaireForm.markAllAsTouched();
    }
  }

  /** Optionally patch responses */
  patchResponses(data: Partial<Record<string, any>>): void {
    this.questionnaireForm.patchValue(data);
  }
}
