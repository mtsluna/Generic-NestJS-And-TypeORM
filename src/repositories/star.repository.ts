import { EntityRepository, Repository } from "typeorm";
import { Star } from "../entity/star";

@EntityRepository(Star)
export class StarRepository extends Repository<Star>{

}