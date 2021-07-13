export interface Message {
  id: number,
  from: string,
  to: string,
  subject: string,
  body: string,
  read: boolean,
  sendAt: string
}
