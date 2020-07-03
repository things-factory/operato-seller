import {
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  Index,
  Column,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'
import { MarketplaceProductAttribute, MarketplaceProduct, MarketplaceProductCategory } from '../entities'
@Entity()
@Index(
  'ix_marketplace-product-variation_0',
  (marketplaceProductVariation: MarketplaceProductVariation) => [
    marketplaceProductVariation.domain,
    marketplaceProductVariation.name
  ],
  { unique: true }
)
export class MarketplaceProductVariation {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @ManyToOne(type => MarketplaceProduct, marketplaceProduct => marketplaceProduct.marketplaceProductVariations)
  marketplaceProduct: MarketplaceProduct

  @Column()
  name: string

  @Column({
    nullable: true
  })
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User
}
