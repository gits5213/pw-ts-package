//import { expect, Page, Locator } from "@playwright/test"
  let url: string
  
  export class UiUtils {
      rand!: number
      randNumber!: string
      fName!: string
      lName!: string
      nickName!: string
  
      async delay(timeout:number){
          return new Promise<void>((resolve) => {
              setTimeout(resolve,timeout)
              
          })
      }
  
      searchFirstName(data: string): boolean {
          console.log("searchFirstName [First Name]:" + this.fName)
          console.log("searchFirstName [data[0]:" + data)
          return data.includes(this.fName)
      }
  
      getRandomNumber(){
          const rand = Math.floor(3 + Math.random() * (9 - 3 + 1))
          console.log(`index == ${rand}`)
          return rand
      }
  
      getRandomFirstName() {
          this.rand = Math.floor(1000 + Math.random() * 9000)
          this.randNumber = this.rand.toString()
          this.fName = "Test" + this.randNumber
          console.log("RandomFirstName [" + this.fName + "]")
          return this.fName
      }
  
      getRandomLastName() {
          this.rand = Math.floor(100 + Math.random() * 900)
          this.randNumber = this.rand.toString()
          this.lName = "Auto" + this.randNumber
          console.log("RandomLastName [" + this.lName + "]")
          return this.lName
      }
  
      getNickName() {
          this.rand = Math.floor(10 + Math.random() * 90)
          this.randNumber = this.rand.toString()
          this.nickName = "Nic" + this.randNumber
          console.log("NickName [" + this.nickName + "]")
          return this.nickName
      }
  
      async getProjectName() {
          this.rand = Math.floor(10 + Math.random() * 9000000)
          this.randNumber = this.rand.toString()
          this.nickName = "AutomatedMaterial" + this.randNumber
          return this.nickName
      }
  
      async getVendorName() {
          this.rand = Math.floor(10 + Math.random() * 9000000)
          this.randNumber = this.rand.toString()
          this.nickName = "Vendor" + this.randNumber
          return this.nickName
      }
  
      async getRandomEmail() {
          this.rand = Math.floor(10 + Math.random() * 9000000)
          this.randNumber = this.rand.toString()
          this.nickName = "randomemail" + this.randNumber + "@hdsupply.com"
          return this.nickName
      }
  
      async getNextMonthDate(dataCounter:number){
          var nextWorkingDayFound = false;
          var nextWorkingDate = new Date()
          var originalDate = new Date()
          var dateCounter = dataCounter
  
          while (!nextWorkingDayFound) {
              nextWorkingDate.setDate(originalDate.getDate() + dateCounter);
              dateCounter++;
  
              if (nextWorkingDate.getDay() === 6 || nextWorkingDate.getDay() === 0)
                  nextWorkingDayFound =  false;
                  
              else
                  nextWorkingDayFound =  true;
          }
  
          let dateFormatted = new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
          }).format(nextWorkingDate)
  
          console.log(`dateFormatted : ${dateFormatted}`)
          return dateFormatted
      } 
  
    //   async scrolldown(page: Page, locator: Locator) {
    //       console.log(`is locator hidden :: ${await locator.isHidden()}`)
    //       while (await locator.isHidden()) {
    //           await page.keyboard.press('ArrowRight')
    //           await page.waitForTimeout(1000)
    //       }
    //   }
  
    //   async scrollHorizontallyTo(elementLocator: Locator, scrollValue: number) {
    //       await elementLocator.evaluate((element, value) => {
    //         element.scrollLeft = value;  // Set the scrollLeft position
    //       }, scrollValue);
    //     }
  
     
      /*
          Function to validate if table rows are sorted in the specified order (ASC/DESC)
      */
    //   async validateTableAscDescOrder(
    //       rows: Locator, 
    //       order: "asc" | "desc",
    //   ) {
    //       const rowValues = await rows.evaluateAll(elements => 
    //           elements.map(element => element.textContent?.trim() || "").filter(Boolean)
    //       );
  
    //       const sortedValues = [...rowValues].sort((a, b) =>
    //           order === "asc" ? a.localeCompare(b) : b.localeCompare(a)
    //       );
    //       expect(rowValues).toEqual(sortedValues);
    //   }
  
    //   async waitForElement(
    //       element: Locator, 
    //       state: 'visible' | 'hidden' | 'attached' = 'visible',
    //       timeout: number = 9500
    //   ) {
    //       await element.waitFor({ state, timeout });
    //   }
  
    //   async performAssertion(
    //       target: Locator,
    //       assertionType: string, 
    //       ...params: any[]
    //   ) {
    //       switch (assertionType) {
    //           case 'toBeAttached':
    //           await expect(target).toBeAttached();
    //           break;
    //           case 'toBeChecked':
    //           await expect(target).toBeChecked();
    //           break;
    //           case 'toBeDisabled':
    //           await expect(target).toBeDisabled();
    //           break;
    //           case 'toBeEditable':
    //           await expect(target).toBeEditable();
    //           break;
    //           case 'toBeEmpty':
    //           await expect(target).toBeEmpty();
    //           break;
    //           case 'toBeEnabled':
    //           await expect(target).toBeEnabled();
    //           break;
    //           case 'toBeFocused':
    //           await expect(target).toBeFocused();
    //           break;
    //           case 'toBeHidden':
    //           await expect(target).toBeHidden();
    //           break;
    //           case 'toBeInViewport':
    //           await expect(target).toBeInViewport();
    //           break;
    //           case 'toBeVisible':
    //           await expect(target).toBeVisible();
    //           break;
    //           case 'toContainText':
    //           await expect(target).toContainText(params[0]);
    //           break;
    //           case 'toHaveAttribute':
    //           await expect(target).toHaveAttribute(params[0], params[1]);
    //           break;
    //           case 'toHaveClass':
    //           await expect(target).toHaveClass(params[0]);
    //           break;
    //           case 'toHaveCount':
    //           await expect(target).toHaveCount(params[0]);
    //           break;
    //           case 'toHaveCSS':
    //           await expect(target).toHaveCSS(params[0], params[1]);
    //           break;
    //           case 'toHaveId':
    //           await expect(target).toHaveId(params[0]);
    //           break;
    //           case 'toHaveJSProperty':
    //           await expect(target).toHaveJSProperty(params[0], params[1]);
    //           break;
    //           case 'toHaveScreenshot':
    //           await expect(target).toHaveScreenshot();
    //           break;
    //           case 'toHaveText':
    //           await expect(target).toHaveText(params[0]);
    //           break;
    //           case 'toHaveValue':
    //           await expect(target).toHaveValue(params[0]);
    //           break;
    //           case 'toHaveValues':
    //           await expect(target).toHaveValues(params[0]);
    //           break;
    //           default:
    //           throw new Error(`Unsupported assertion type: ${assertionType}`);
    //       }
    //   }
  }
  