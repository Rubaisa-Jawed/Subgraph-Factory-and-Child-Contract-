import { BigInt } from "@graphprotocol/graph-ts"
import {
  FactoryContract,
  ChildCreated,
  ChildCreated__Params
} from "../generated/FactoryContract/FactoryContract"
import {
  ChildUpdated,
} from "../generated/templates/ChildContract/ChildContract"
import {
  ChildContract
} from "../generated/templates"
import { ChildSchema } from "../generated/schema"
import { log } from "@graphprotocol/graph-ts"

export function handleChildCreated(event: ChildCreated): void {
  log.info("handleChildCreated Started", [])
  let child = new ChildSchema(event.params.childAddress.toHexString())
  // child fields can be set based on event parameters
  // Entities can be written to the store with `.save()`
  child.data = event.params.data
  ChildContract.create(event.params.childAddress)
  child.save()
  log.info("handleChildCreated Complete", [])
}

export function handleChildUpdated(event: ChildUpdated): void {
  log.info("handleChildUpdated Started", [])
  let child = ChildSchema.load(event.params.childAddress.toHexString())

  log.info(event.params.childAddress.toHexString(), []);
  log.info(event.params.data.toString(), []);

  if(child) {
    child.data = event.params.data
    child.save();
    log.info("handleChildUpdated Complete", [])  
  }
 
}
