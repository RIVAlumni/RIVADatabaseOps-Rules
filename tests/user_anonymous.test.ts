import { random } from "faker"
import { setup, teardown } from ".."
import { firestore } from "@firebase/testing"

describe("Anonymous User", () => {
  let db: firestore.Firestore

  beforeEach(async () => (db = await setup(undefined)))
  afterEach(async () => await teardown())

  it("should deny reading/writing/deleting any user document", async () => {
    const ref = db.doc(`users/${random.uuid()}`)

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting any member document", async () => {
    const ref = db.doc(`members/${random.uuid()}`)

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting any remarks document", async () => {
    const ref = db.doc(`members/${random.uuid()}/remarks/${random.uuid()}`)

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting any event document", async () => {
    const ref = db.doc(`events/${random.number(99999999)}`)

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })

  it("should deny reading/writing/deleting any participation document", async () => {
    const ref = db.doc(`participations/${random.uuid()}`)

    await expect(ref.get()).toDeny()
    await expect(ref.set({})).toDeny()
    await expect(ref.update({})).toDeny()
    await expect(ref.delete()).toDeny()
  })
})
