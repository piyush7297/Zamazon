import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Men',
    children: [
      { name: 'Tshirt' },
      { name: 'Jacket' },
      { name: 'Jeans' },
    ]
  }, {
    name: 'Women',
    children: [
      {
        name: 'Beauty',
        children: [
          { name: 'Lipistick' },
          { name: 'Nailpolish' },
        ]
      }, {
        name: 'Clothes',
        children: [
          { name: 'Top' },
          { name: 'Pants' },
        ]
      },
    ]
  },
];
@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})

export class SubheaderComponent implements OnInit {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  searchText : any = ''
  @Input() placeHolder : string = ''
  @Output() searchEvent = new EventEmitter<any>();
  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  ngOnInit(): void {
  }
  onSearch(searchValue : string){
    this.searchEvent.emit(searchValue)
  }
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
