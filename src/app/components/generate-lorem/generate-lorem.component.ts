import { Component, OnInit } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';

@Component({
  selector: 'app-generate-lorem',
  templateUrl: './generate-lorem.component.html',
  styleUrls: ['./generate-lorem.component.scss'],
})
export class GenerateLoremComponent implements OnInit {
  words: number;
  paragraph: number;
  sentences: number;

  maxSentences: number;
  minSentences: number;
  maxWords: number;
  minWords: number;
  result = 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the';

  constructor() {}

  ngOnInit() {}

  generate(type: string) {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: this.maxSentences,
        min: this.maxSentences,
      },
      wordsPerSentence: {
        max: this.maxWords,
        min: this.minWords,
      },
    });

    if (type === 'words') {
      const textCreatedlorem: any = lorem.generateWords(this.maxWords);
      this.result = textCreatedlorem;

    } else if (type === 'sentences') {
      const textCreatedlorem: any = lorem.generateSentences(this.maxSentences);
      console.log(textCreatedlorem);

      this.result = textCreatedlorem;
    } else {
      const textCreatedlorem: any = lorem.generateParagraphs(this.maxSentences);
      this.result = textCreatedlorem;
    }
  }
}
