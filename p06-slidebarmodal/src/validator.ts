type validatable = {
  input: HTMLInputElement;
  isRequired: boolean;
  maxLength?: number;
  minLength?: number;
  isEmail?: boolean;
  matchWith?: HTMLInputElement;
};

export class Validator {
  // 未入力チェック
  public isBlank(input: HTMLInputElement) {
    if (input.value.trim() === "") {
      this.showError(input, `${this.getFieldName(input)} is required`);
      return true;
    }

    this.showSuccess(input);
    return false;
  }

  // 文字数チェック
  public checkLength(input: HTMLInputElement, min: number, max: number) {
    if (input.value.length < min) {
      this.showError(
        input,
        `${this.getFieldName(input)} must be at least ${min} characters`
      );
      return false;
    }

    if (input.value.length > max) {
      this.showError(
        input,
        `${this.getFieldName(input)} must be less than ${max} characters`
      );
      return false;
    }

    this.showSuccess(input);
    return true;
  }

  // メールアドレスの形式チェック
  public checkEmail(input: HTMLInputElement) {
    const re = /^[^@]+@[^@]+\.[^@]+$/;
    if (!re.test(input.value.trim())) {
      this.showError(input, "Email is not valid");
      return false;
    }

    this.showSuccess(input);
    return true;
  }

  // 2つの入力内容が等しいかのチェック
  public matchWith(input1: HTMLInputElement, input2: HTMLInputElement) {
    if (input1.value !== input2.value) {
      this.showError(
        input2,
        `Dose not match with ${this.getFieldName(input1)}`
      );
      return false;
    }

    this.showSuccess(input2);
    return true;
  }

  // バリデーション用メソッド
  public validate(validatableItem: validatable) {
    const input = validatableItem.input;
    let isValid = true;
    if (validatableItem.isRequired) {
      isValid = !this.isBlank(input);
    }

    if (isValid && validatableItem.minLength && validatableItem.maxLength) {
      isValid = this.checkLength(
        input,
        validatableItem.minLength,
        validatableItem.maxLength
      );
    }

    if (isValid && validatableItem.isEmail) {
      isValid = this.checkEmail(input);
    }

    if (isValid && validatableItem.matchWith) {
      isValid = this.matchWith(input, validatableItem.matchWith);
    }

    return isValid;
  }

  // 複数アイテムをまとめてバリデーション
  public validateMany(validatableItems: validatable[]) {
    let isValid = true;
    for (let validatableItem of validatableItems) {
      isValid = this.validate(validatableItem) && isValid;
    }
    return isValid;
  }

  // エラーメッセージの表示
  private showError(input: HTMLInputElement, message: string) {
    input.parentElement!.className = "form-control error";
    input.parentElement!.querySelector("small")!.innerText = message;
  }

  // 正しく入力された場合の処理
  private showSuccess(input: HTMLInputElement) {
    input.parentElement!.className = "form-control success";
  }

  // 入力欄の項目名を取得
  private getFieldName(input: HTMLElement) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
}
